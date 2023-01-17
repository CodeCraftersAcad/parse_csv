import React from 'react'
import AnimatedHeader from '../../components/AnimtedHero'
export default function Home() {
    return (
        <div>
            <h1 className='text-center'>Hi :&#x29;</h1>
            <div style={{ width: "70%", margin: "0 auto" }}>
                <div>
                    <p>Thank you for coming.</p>
                    <p>The parser is still under construction.</p>
                    <p>The google sheet button doesn't quite work yet.</p>
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
                </div>
            </div>
        </div>
    )
}
