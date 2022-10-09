import './App.css'
//import DirectoryTree from 'directory-tree-view'
import DirectoryTreeView from './directoryTreeView'
import sampleData from './sampleTree'

function App() {
    const onClick = (target, nodeData) => {
        console.log(target, nodeData)
    }
    return (
        <div className="app">
            <header className="app-header">
                <h1>Directory Tree</h1>
            </header>
              <main>
                  <div className="tree-box">
                    <DirectoryTreeView treeData={sampleData} onNodeClick={onClick} skin=""/>
                </div>
            </main>
        </div>
    )
}

export default App
