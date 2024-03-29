import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");

  return (
    <>
      <div>
        <h1>Year:{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Manager</button>
        <h1>Manger on duty:{manager}</h1>
        <button onClick={() => setManager("Rachel")}>New Manager</button>
      </div>
      <div>
        <h1>Status {status}</h1>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
      </div>
    </>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
