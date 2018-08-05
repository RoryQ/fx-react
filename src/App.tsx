import * as React from 'react';
import './App.css';

import FxCalculator from './containers/FxCalculatorContainer';

class App extends React.Component {
  public render() {

    let currencies = [{ code: 'GBP', name: 'Pounds Sterling', flag: 'gb', symbol: "£" }, {code: 'AUD', name: 'Australian Dollar', flag: 'au', symbol: "$"}]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Daily Exchange Rates</h1>
        </header>
        
        <FxCalculator currencies={currencies} />
      </div>
    );
  }
}

export default App;
