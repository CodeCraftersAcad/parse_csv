import React, { useState, useContext } from 'react'
import { Navbar, Nav, Container, FormLabel, NavDropdown } from 'react-bootstrap'
import FileContext from '../../../store/fileStore'
import PTD from '../../../utils/PTD'
import { SaveDoc } from '../../../utils/SaveDoc'
import './ParserNav.css'
export default function ParserNav() {
    const { tempObj, setTempObj } = useContext(FileContext)
    const [title, setTitle] = useState("Untitled")
    const [gInput, setGInput] = useState("")
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
            setTempObj({ ...tempObj, cells: [...tempObj.cells, finalData] })
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
        PTD.getRemoteCsv(gInput);
    }
    const handleTitleChange = e => {
        setTitle(e.target.value);
    }
    const handleSaveDoc = () => {
        SaveDoc({ title, cells: tempObj.cells });
    }
    const handleOpenNb = e => {
        const file = e.target.files[0]
        const r = new FileReader();
        r.readAsText(file);
        r.onload = function () {
            setTempObj({ title: JSON.parse(r.result).title, cells: JSON.parse(r.result).cells });
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
                        <input type="text" name="title" value={tempObj.title ? tempObj.title : title} onChange={handleTitleChange} style={{ width: "100px", border: "none", outline: "none", borderBottom: "1px solid black" }} />
                        <button className='ml-2 btn btn-sm btn-outline-dark' onClick={handleSaveDoc}>SAVE</button>
                    </Nav.Item>
                    <Nav.Item>
                        <FormLabel className='btn mb-0 btn-sm'>
                            Open File
                            <input type="file" accept='.ptnb' id="nb-import" onChange={handleOpenNb} />
                        </FormLabel>
                    </Nav.Item>
                    <NavDropdown title="Import File">
                        <Nav.Item>
                            <FormLabel className='btn mb-0 btn-sm'>
                                Local CSV
                                <input type="file" accept=".csv" id="localFileInput" onChange={handleLocalCsv} />
                            </FormLabel>
                        </Nav.Item>
                        <NavDropdown.Item className='btn btn-outline-dark btn-sm'>
                            Google Sheet
                            {/* <input type="text" onChange={handleGoogleInputChange} /> */}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
