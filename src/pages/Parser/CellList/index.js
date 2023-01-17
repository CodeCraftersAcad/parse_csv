import React, { useContext, useState, useEffect } from 'react'
import FileContext from '../../../store/fileStore'
import DataCell from '../DataCell';
import './CellList.css'
export default function CellList() {
    const { tempObj, setTempObj } = useContext(FileContext);
    const [cells, setCells] = useState([]);
    const [table, setTable] = useState({
        keys: [],
        values: []
    })
    useEffect(() => {
        setCells(tempObj.cells);
    }, [tempObj])
    const deleteCell = index => {
        const removed = tempObj.cells.filter(cell => cell.id !== index);
        setTempObj({ ...tempObj, cells: removed })
    }
    const tableData = (id, index) => {
        const obj = tempObj.cells.find(cell => cell.id === id)
        const rows = obj.rows;
        const keys = Object.keys(rows[0]);
        const values = rows.map(row => Object.values(row));
        const dataObj = {
            id: `${Date.now()}_${id}`,
            type: "table",
            keys,
            values
        }
        if (obj.subcells.length < 1) obj.subcells.push(dataObj);
        const newCells = tempObj.cells.map(cell => {
            if (cell.id === id) return cell = obj
            else return cell
        });
        setTempObj({ ...tempObj, cells: newCells })
    }

    const cellList = cells.map((cell, i) => (
        <div key={`${cell.id}_${i}`}>
            <DataCell
                i={i}
                cell={cell}
                table={table}
                tableData={tableData}
                cellId={Date.now() + i}
                deleteCell={deleteCell}
            />
        </div>
    ))
    return (
        <div>{cellList}</div>
    )
}
