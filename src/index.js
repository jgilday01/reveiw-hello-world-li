import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  )
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  )
}


function App(props) {

  return (
    <div>
      { props.season === "Summer" ?
        <Lake name="Jenny Lake" /> : props.season === "Winter" ?
          <SkiResort name="Jackson Hole Mount" /> :
          <h1>Come Back another time</h1>
      }
    </div>
  )

}

ReactDOM.render(
  <App season="x" />,
  document.getElementById('root')
);
