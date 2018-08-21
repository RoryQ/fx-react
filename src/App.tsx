import './App.css';
import { connect } from 'react-redux';
import { Currency } from './types';
import { Dictionary } from 'ramda';
import { Dispatch } from 'redux';
import * as actions from './actions';
import * as React from 'react';
import axios from 'axios';
import FxCalculator from './containers/FxCalculatorContainer';
import { dailyRatesXmlToRates } from './dailyRatesXmlToRates';
import { Footer } from './FooterProps';
import {RootState} from './types';

export interface AppActions {
  LoadFxRates: (currencies: Array<Currency>, rates: Dictionary<number>, date: string) => void;
}

export interface AppProps {
  date?: string;
}

export type AppModel = AppActions & AppProps;
export interface AppState {
}

class App extends React.Component<AppModel, AppState> {
  constructor(props: AppModel) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.get('https://s3-ap-southeast-2.amazonaws.com/aws-ecb-rates-mirror/eurofxref-daily.xml')
      .then(x => {
        let [rates, currencies, date] = dailyRatesXmlToRates(x.data);
        this.props.LoadFxRates(currencies, rates, date);
      })
  }

  public render() {
    return (
      <div className="App Site">
        <header className="App-header">
          <h1 className="App-title">Daily Exchange Rates</h1>
        </header>
        <div className="Site-content">
          <FxCalculator />
        </div>
		    <Footer date={this.props.date || ''}/>
      </div>
    );
  }
}

export function mapStateToProps(state: RootState) : AppProps {
  return {
    date: state.fx.date
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LoadFxRatesAction>): AppActions {
  return {
    LoadFxRates: (currencies, rates, date) => dispatch(actions.LoadFxRates(currencies, rates, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
