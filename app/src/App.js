import './App.css'
import sampleData from './assets/sampleTree'
import DirectoryTree from 'directory-tree-view'
import { useState } from 'react'

function App() {
    // eslint-disable-next-line
    const [tree, setTree] = useState(sampleData)
    const onClick = (e) => {
        console.log(e)
    }
    console.log('App')
    return (
        <div className="app">
            <header className="app-header">
                <h1>Directory Tree</h1>
            </header>
              <main>
                  <div className="tree-box">
                    <DirectoryTree treeData={tree} onNodeClick={onClick} skin="solids"/>
                </div>
            </main>
        </div>
    )
}

export default App
