import './App.css';

function Header({  }) {
  return <>
  </>
}

function CellHeader({ idx }) {
  return <> 
    <div>
      <p>Frame: {idx}</p>
    </div>
  </>
}

function CellImage({  }) {
  return <> 
    <div>
    </div>
  </>
}

function CellTextInput({  }) {
  return <> 
    <div>
    </div>
  </>
}

function CellButtons({  }) {
  return <> 
    <div>
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
    <div className="boards">
      <table>
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
