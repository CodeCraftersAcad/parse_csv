import React, { useContext, useState, useEffect } from 'react'
import FileContext from '../../../store/fileStore'
import './CellList.css'
export default function CellList() {
    const { tempObj } = useContext(FileContext);
    const [cells, setCells] = useState([]);

    useEffect(() => {
        setCells(tempObj.cells);
    }, [tempObj])

    const cellList = cells.map(cell => (
        <div style={{ paddingLeft: "10px", paddingRight: "10px", margin: "20px" }} key={Date.now()} id={Date.now()}>
            <div style={{ maxHeight: "150px", padding: "15px", backgroundColor: "#eee", fontSize: "10px", overflow: "scroll" }}>
                {JSON.stringify(cell)}
            </div>
        </div>
    ))
    return (
        <div>{cellList}</div>
    )
}
