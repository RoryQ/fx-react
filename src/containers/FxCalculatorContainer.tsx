import * as React from 'react';
import { Currency } from '../types';
import SourceComponent from '../components/SourceComponent';
import { Dictionary } from 'ramda';


export interface FxCalculatorContainerProps {
    currencies: Array<Currency>;
    rates: Dictionary<number>;
    base: string;
}

export interface FxCalculatorContainerActions {
}

export type FxCalculatorModel = FxCalculatorContainerProps & FxCalculatorContainerActions;

interface FxCalculatorState {
    fromAmount?: number;
    fromCurrency?: Currency;

    toAmount?: number;
    toCurrency?: Currency;
}

class FxCalculatorContainer extends React.Component<FxCalculatorModel, FxCalculatorState> {
    constructor(props: FxCalculatorModel){
        super(props);

        this.state = {
        }
    }

    currenciesSelected = ():boolean => !!this.state.fromCurrency && !!this.state.toCurrency;

    applyFx(from:string, to:string, amount:number): number {
        let rate = 1;
        if (from === this.props.base)
        {
            rate = this.props.rates[to];
        }
        else if (to == this.props.base)
        { 
            rate = 1.0 / this.props.rates[from];
        }
        else
        {
            rate = (1.0 / this.props.rates[from]) * this.props.rates[to];
        }

        return rate * amount;
    }

    updateFrom = (amount: number) => {
        this.setState({ fromAmount: amount});

        if (this.currenciesSelected()){
            let converted = this.applyFx(this.state.fromCurrency!.code, this.state.toCurrency!.code, amount);
            this.setState({toAmount: converted});
        }
    }
    selectCurrencyFrom = (currency: Currency) => {
        this.setState({fromCurrency: currency});

        if (this.currenciesSelected() && this.state.fromAmount){
            let converted = this.applyFx(currency.code, this.state.toCurrency!.code, this.state.fromAmount);
            this.setState({toAmount: converted});
        }
    }

    updateTo = (amount: number) => {
        this.setState({toAmount: amount});

        if (this.currenciesSelected()){
            let converted = this.applyFx(this.state.toCurrency!.code, this.state.fromCurrency!.code, amount);
            this.setState({fromAmount: converted});
        }
    }
    selectCurrencyTo = (currency: Currency) => {
        this.setState({toCurrency: currency});

        if (this.currenciesSelected() && this.state.toAmount){
            let converted = this.applyFx(currency.code, this.state.fromCurrency!.code, this.state.toAmount );
            this.setState({fromAmount: converted});
        }
    }

    public render() {
        return (
            <div>
                <SourceComponent direction='from' amount={this.state.fromAmount} currencies={this.props.currencies} onAmountUpdate={this.updateFrom} onSelectCurrency={this.selectCurrencyFrom} />
                <SourceComponent direction='to' amount={this.state.toAmount} currencies={this.props.currencies} onAmountUpdate={this.updateTo} onSelectCurrency={this.selectCurrencyTo} />
            </div>
        )
    }
}

export default FxCalculatorContainer;