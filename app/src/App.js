import './App.css'
import sampleData from './assets/sampleTree'
import DirectoryTree from 'directory-tree-view'

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
                    <DirectoryTree treeData={sampleData} onNodeClick={onClick} skin="solids"/>
                </div>
            </main>
        </div>
    )
}

export default App
