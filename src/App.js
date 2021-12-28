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
  const factor = 20;

  return <> 
    <div 
      className="cell-image"
      style={{
        margin: "auto",
      }}
    >
      <div 
        style={{
          width: 16 * factor,
          height: 9 * factor,
          backgroundColor: "grey",
          margin: "auto",
        }} 
      />
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
          margin: "auto",
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
    <div 
      className="board-cell"
      style={{
        width: "300px",
        margin: "15px",
      }}
    >
      <CellHeader idx={idx} />
      <CellImage />
      <CellTextInput />
      <CellButtons />
    </div>
  </>
}

function Boards({  }) {
  const n = 6;
  const range = n => new Array(n).fill(null).map((_, i) => i);

  return <> 
    <div 
      className="boards"
      style={{
        margin: "auto",
        width: "95%",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {
        range(n).map(i => <BoardCell idx={i+1} />)
      }
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
