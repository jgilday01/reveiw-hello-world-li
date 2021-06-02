import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const lakeList = [
  { id: 1, name: "Echo", trialhead: "Echo" },
  { id: 2, name: "Maud", trialhead: "Writes" },
  { id: 3, name: "Velma", trialhead: "Bayview" }
];



function App({ lakes }) {
  return (
    <div>
      {lakes.map(lake => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Access: {lake.trialhead}</p>
        </div>
      ))}
    </div>
  )

}


ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);
