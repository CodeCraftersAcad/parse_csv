import React from 'react'
import CellList from '../CellList'
import TableCell from '../TableCell'
export default function DataCell({ i, cell, tableData, deleteCell, table }) {
    return (
        <div id={cell.id} style={{ border: "1px solid black", padding: "2px", margin: "10px" }}>
            <div style={{ paddingLeft: "10px", paddingRight: "10px", margin: "20px", display: "flex" }} id={cell.id}>
                <p><small><b>File &#x5b;{i}&#x5d;</b></small></p>
                <div style={{ maxHeight: "150px", padding: "15px", backgroundColor: "#eee", fontSize: "10px", overflow: "scroll", width: "90%", margin: "0 auto" }}>
                    {JSON.stringify(cell.rows)}
                </div>
            </div>
            <div className="cell-btn-div my-2" style={{ width: "90%", margin: "0 auto" }}>
                <button className='btn btn-sm btn-outline-dark' onClick={() => { tableData(cell.id, i) }}>TABLE</button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => { deleteCell(cell.id, i) }}>DELETE</button>
            </div>
            {cell.subcells.length > 0 ? <div>
                {cell.subcells.map(c => {
                    if (c.type === "table") return <TableCell keys={c.keys} values={c.values} />
                })}
            </div> : null}
        </div >
    )
}
