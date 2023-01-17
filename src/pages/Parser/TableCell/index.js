import React from 'react'

export default function TableCell({ i, cell, tableData, deleteCell, cellId, keys, values }) {
    return (
        <div className='table-responsive' style={{ height: "300px" }}>
            <table className='table align-middle'>
                <thead><tr>{keys.map(k => <th key={k} scope="col">{k}</th>)}</tr></thead>
                <tbody>
                    {values.map(va =>
                        <tr key={va}>
                            {va.map(v =>
                                <td key={v}>{v}
                                </td>)}
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}
