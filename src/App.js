import React, { Component } from 'react';
import './App.css';

import WidgetContainer from "./stats/WidgetContainer.js";

class App extends Component {
  render() {
    return <React.Fragment>
        <header>welcome to work</header>
        <WidgetContainer />
      </React.Fragment>;
  }
}

export default App;
