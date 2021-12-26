import './App.css';

function Header({  }) {
  return <>
  </>
}

function CellHeader({ idx }) {
  return <> 
    <div>
      <span
        style={{
          fontFamily: "sans-serif",
        }}
      >
        Frame: {idx}
      </span>
    </div>
  </>
}

function CellImage({  }) {
  return <> 
    <div>
      <div className="cell-image"/>
      {/* <svg
        viewBox='0 0 1920 1080'
        style={{ 
          backgroundColor: '#ccc',
          margin: "auto",
        }} 
      /> */}
    </div>
  </>
}

function CellTextInput({  }) {
  return <> 
    <div>
      <textarea 
        style={{ 
          resize: "none", 
          width: "100%",
        }}
      />
    </div>
  </>
}

function CellButtons({  }) {
  return <> 
    <div>
      <button>Generate</button>
      <button>Clear</button>
    </div>
  </>
}

function BoardCell({ idx }) {
  return <> 
    <div className="board-cell">
      <CellHeader idx={idx} />
      <CellImage />
      <CellTextInput />
      <CellButtons />
    </div>
  </>
}

function Boards({  }) {
  const nRows = 3;
  const nCols = 3;

  const range = n => new Array(n).fill(null).map((_, i) => i);
  const getIdx = (row, col) => row * nRows + col;

  return <> 
    <div 
      className="boards"
      style={{
        margin: "auto",
        padding: "5px",
      }}
    >
      <table>
        <tbody>
          {
            range(nRows).map(row => (
              <tr key={row}>
                {
                  range(nCols).map(col => (
                    <td key={col}>
                      <BoardCell idx={getIdx(row, col)} />
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Boards />
    </div>
  );
}

export default App;
