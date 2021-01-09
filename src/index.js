// First two lines are absolute necessary for any react project. Index.js is the main js file. 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // loaded our root component here

//while rendering, we must specify the component and where to render it.
ReactDOM.render(<App />,document.getElementById('root'));

