import * as React from 'react';
import './App.css';

import SourceComponent from './Components/SourceComponent';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Daily Exchange Rates</h1>
        </header>
        <SourceComponent/>
        <SourceComponent/>
      </div>
    );
  }
}

export default App;
