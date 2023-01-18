import React from 'react'
import importG1 from '../../images/importGsheet1.png'
import importG2 from '../../images/importGsheet2.png'
import importG3 from '../../images/importGsheet3.png'
export default function Home() {
    return (
        <div style={{ marginBottom: "50px" }}>
            <h1 className='text-center'>Hi :&#x29;</h1>
            <div style={{ width: "70%", margin: "0 auto" }}>
                <div>
                    <p className='my-0'>Thank you for check out my CSV Parser.</p>
                    <p className='mt-0'>The parser is still under construction.</p>
                    <p className='mb-0'><b>Current Features</b></p>
                    <ul>
                        <li>CSV must have a header</li>
                        <li>CSV file size must be under 512MB</li>
                        <li>Save rendered CSV as a document by name as a .ptnb file</li>
                        <li>It can also reopen that file and rerender</li>
                        <li>Currently the saved file will only append a file name if you save it with the same name.</li>
                    </ul>
                    <p className='mb-0'><b>To make it work as intended:</b></p>
                    <ol>
                        <li>Find the <code>Parser</code> link on the Navbar and click it</li>
                        <li>On the Parser page click the <code>Import File</code> dropdown</li>
                        <li>Choose <code>Local CSV</code></li>
                        <li>An File Explore box will open</li>
                        <li>Find and click on a CSV file</li>
                        <li>If all goes well a box will appear with your data</li>
                        <li>You can then <code>Table</code> or <code>Delete</code> your data.</li>
                    </ol>
                    <p>To do this with multiple files just repeat the steps above</p>
                    <p><b>To save file:</b></p>
                    <ol>
                        <li>Find the <code>Parser</code> link on the Navbar and click it</li>
                        <li>On the Parser page click the <code>Import File</code> dropdown</li>
                        <li>Choose <code>Local CSV</code></li>
                        <li>An File Explore box will open</li>
                        <li>Find and click on a CSV file</li>
                        <li>If all goes well a box will appear with your data</li>
                        <li>Find the input at the top of the page that says <code>Untitled</code></li>
                        <li>Type in the chosen file name and tap the <code>SAVE</code> button</li>
                        <li>If all goes well you should now be able to see the file in your downloads folder</li>
                    </ol>
                    <p><b>To open file:</b></p>
                    <ol>
                        <li>Find the <code>Parser</code> link on the Navbar and click it</li>
                        <li>Find the <code>Open File</code> link in the Navbar and click it</li>
                        <li>An File Explore box will open</li>
                        <li>Find and click on a PTNB file</li>
                        <li>If all goes well the info you previously saved will be rendered to the page</li>
                    </ol>
                    <p><b>Import Google Sheet</b></p>
                    <ol>
                        <li>
                            <p>To publish Google Sheet. Click the <code>File</code> tab. Mover your cursor to <code>Share</code>. Click on <code>Publish to web</code></p>
                            <img src={importG1} alt={"Publish Google Sheet"} style={{ height: "300px", width: "auto" }} />
                        </li>
                        <li className='pt-5'>
                            <p>A modal will appear, click on the dropdown that says <code>Web Page</code>, choose the <code>Comma-separated values .csv</code> option</p>
                            <img src={importG2} alt={"Save as CSV"} style={{ height: "300px", width: "auto" }} />
                        </li>
                        <li className='pt-5'>
                            <p>Copy the url in the dialog box.</p>
                            <img src={importG3} alt={"Copy Google Sheet URL"} style={{ height: "300px", width: "auto" }} />
                        </li>
                        <li>
                            <p>In the Parser Navbar click <code>Import File</code> &gt; <code>Google Sheet</code>. Past URL into modal and click <code>Import CSV</code></p>
                        </li>
                    </ol>
                </div>
                <h2 className='text-center'>Future Development</h2>
                <ul>
                    <li>Chartting data. Giving the user the ability to choose ulumns with numeric values and render a bar chart</li>
                    <li>Importing JSON files.</li>
                    <li>Dropping rows with null values.</li>
                </ul>
            </div>
        </div>
    )
}
