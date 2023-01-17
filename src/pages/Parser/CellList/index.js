import React, { useContext, useState, useEffect } from 'react'
import FileContext from '../../../store/fileStore'
import './CellList.css'
export default function CellList() {
    const { tempObj, setTempObj } = useContext(FileContext);
    const [cells, setCells] = useState([]);

    useEffect(() => {
        setCells(tempObj.cells);
    }, [tempObj])
    const deleteCell = index => {
        tempObj.cells.splice(index, 1)
        setTempObj({ ...tempObj, cells: tempObj.cells })
    }
    const cellList = cells.map((cell, i) => (
        <div key={Date.now() + i}>
            <div style={{ paddingLeft: "10px", paddingRight: "10px", margin: "20px", display: "flex" }} id={Date.now() + i}>
                <p><small><b>File &#x5b;{i}&#x5d;</b></small></p>
                <div style={{ maxHeight: "150px", padding: "15px", backgroundColor: "#eee", fontSize: "10px", overflow: "scroll", width: "90%", margin: "0 auto" }}>
                    {JSON.stringify(cell)}
                </div>
            </div>
            <div className="cell-btn-div mt-2" style={{ width: "90%", margin: "0 auto" }}>
                <button className='btn btn-sm btn-outline-danger' onClick={() => { deleteCell(i) }}>DELETE</button>
            </div>
        </div >
    ))
    return (
        <div>{cellList}</div>
    )
}
