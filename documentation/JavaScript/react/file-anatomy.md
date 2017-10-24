# Anatomy of a React App

React's primary job is to render HTML. Each component has a render function that returns the HTML that react will create.

```
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Create a component that can be displayed in the DOM
class App extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

// Render the 'App' component into the element with the id 'app'
ReactDOM.render(
    <App />
    , document.getElementById('app')
);
```

In reality the ```<App />``` component would contain sub components and those would contain more. Each component would exist in it's own file that was imported as needed (meaning they could be used in other projects easily and each file stays as simple as it needs to be).

```
// App.js
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}
// Export the component so it can be used in other files
export default App;
```
```
// index.js
import ReactDOM from 'react-dom';

// Import the App component
import App from './path-to-components/App.js';

// Render the 'App' component into the element with the id 'app'
ReactDOM.render(
    <App />
    , document.getElementById('app')
);

```

Loading files from your project files requires the path to be specified (```from './path-to-components/App.js'```) . No path specified results in the compiler looking in the ```node_modules``` folder for it's imports (```from 'react'```)!
