import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement("div", { style: { color: 'blue' } }, React.createElement("h1", null, "Hello") ),
  document.getElementById('root')
);
