import React, { useState, useContext } from 'react'
import { Nav, Container, FormLabel, Dropdown } from 'react-bootstrap'
import FileContext from '../../../store/fileStore'
import PTD from '../../../utils/PTD'
import './ParserNav.css'
export default function ParserNav() {
    const { tempObj, setTempObj } = useContext(FileContext)
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
    return (
        <Nav>
            <Container>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" size='sm'>
                        Import File
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Nav.Item>
                            <FormLabel className='btn btn-sm'>
                                Local CSV
                                <input type="file" accept=".csv" id="localFileInput" onChange={handleLocalCsv} />
                            </FormLabel>
                            <Dropdown.Item className='btn btn-outline-dark btn-sm'>
                                Google Sheet
                                {/* <input type="text" onChange={handleGoogleInputChange} /> */}
                            </Dropdown.Item>
                        </Nav.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Nav>
    )
}
