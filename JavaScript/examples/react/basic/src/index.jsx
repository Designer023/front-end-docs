// Import the packages from node_modules
// We need React and ReactDom so that we can render HTML elements on the page
import ReactDOM from 'react-dom';
import React from 'react';

// Import the App component from our project folder 'components';
import App from './components/App.jsx';

// Render the 'App' component into the element with the id 'app'
ReactDOM.render(
    <App />
    , document.getElementById('app')
);
