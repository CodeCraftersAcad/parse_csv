import React, { useState, useContext } from 'react'
import { Navbar, Nav, Container, FormLabel, NavDropdown } from 'react-bootstrap'
import FileContext from '../../../store/fileStore'
import PTD from '../../../utils/PTD'
import { SaveDoc } from '../../../utils/SaveDoc'
import GoogleSheetModal from '../GoogleSheetModal'
import './ParserNav.css'
export default function ParserNav() {
    const { tempObj, setTempObj } = useContext(FileContext)
    const [title, setTitle] = useState("Untitled")
    const [gInput, setGInput] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const localCsvWHeader = e => {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.log('The File APIs are not fully supported in this browser.');
            return;
        }
        const file = e.target.files[0];
        if (file.size > 5000000) {
            console.log("file too large");
        }
        const r = new FileReader();
        r.readAsText(file);
        r.onload = function () {
            let finalData = [];
            let rows;
            const rawRows = r.result.split("\r");
            if (rawRows.length > 1) {
                console.log("split at comma")
                rows = rawRows.map(item => item.split(","));
            } else {
                console.log("split new line")
                let tempArr = rawRows[0].split("\n")
                rows = tempArr.map(item => item.split(","))
            }
            const header = rows[0]
            const data = rows.splice(1, rows.length - 1);
            finalData = data.map((d, i) => {
                let keys = {};
                header.forEach((item, j) => keys[item] = data[i][j])
                return keys;
            });
            const dataObj = { id: Date.now(), rows: finalData, type: "data", subcells: [] }
            setTempObj({ ...tempObj, cells: [...tempObj.cells, dataObj] })
        }
        r.onerror = function () {
            console.log(r.error);
        }
    }
    const handleLocalCsv = async e => {
        localCsvWHeader(e)
    }
    const handleGoogleInputChange = e => {
        setGInput(e.target.value)
    }
    const handleGoogleCsv = async () => {
        const res = await fetch(gInput);
        const text = await res.text();
        let finalData = [];
        let rows;
        const rawRows = text.split("\r");
        if (rawRows.length > 1) {
            rows = rawRows.map(item => item.split(","));
        } else {
            let tempArr = rawRows[0].split("\n")
            rows = tempArr.map(item => item.split(","))
        }
        const header = rows[0]
        const data = rows.splice(1, rows.length - 1);
        finalData = data.map((d, i) => {
            let keys = {};
            header.forEach((item, j) => keys[item] = data[i][j])
            return keys;
        });
        const dataObj = { id: Date.now(), rows: finalData, type: "data", subcells: [] }
        setTempObj({ ...tempObj, cells: [...tempObj.cells, dataObj] })
        handleClose();
    }
    const handleTitleChange = e => {
        setTitle(e.target.value);
    }
    const handleSaveDoc = () => {
        if (tempObj.cells.length > 0) {
            SaveDoc({ title, cells: tempObj.cells });
        }
    }
    const handleOpenNb = e => {
        const file = e.target.files[0]
        const r = new FileReader();
        r.readAsText(file);
        r.onload = function () {
            setTempObj(JSON.parse(r.result));
            setTitle(JSON.parse(r.result).title);
        }
        r.onerror = function () {
            console.log(r.error);
        }
    }

    return (
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Item style={{ display: "inline" }}>
                        <input
                            type="text"
                            name="title"
                            value={tempObj.title ? tempObj.title : title}
                            onChange={handleTitleChange}
                            style={{ width: "100px", border: "none", outline: "none", borderBottom: "1px solid black" }} />
                        <span style={{ paddingRight: "5px" }}>.ptnb</span>
                        <button className='py-0 btn btn-sm btn-outline-dark' onClick={handleSaveDoc}>SAVE</button>
                    </Nav.Item>
                    <Nav.Item>
                        <FormLabel className='btn mb-0 btn-sm ml-1'>
                            Open File
                            <input type="file" accept='.ptnb' id="nb-import" onChange={handleOpenNb} />
                        </FormLabel>
                    </Nav.Item>
                    <NavDropdown title="Import File" id="import-file-drop">
                        <Nav.Item>
                            <FormLabel className='btn mb-0 btn-sm'>
                                Local CSV
                                <input type="file" accept=".csv" id="localFileInput" onChange={handleLocalCsv} />
                            </FormLabel>
                        </Nav.Item>
                        <NavDropdown.Item className='btn btn-outline-dark btn-sm' onClick={handleShow}>
                            Google Sheet
                            {/* <input type="text" onChange={handleGoogleInputChange} /> */}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
            <GoogleSheetModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                handleGoogleCsv={handleGoogleCsv}
                handleGoogleInputChange={handleGoogleInputChange}
            />
        </Navbar>
    )
}
