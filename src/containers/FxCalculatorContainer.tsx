import * as React from 'react';
import { Currency } from '../types';
import SourceComponent from '../components/SourceComponent';


export interface FxCalculatorContainerProps {
    currencies: Array<Currency>;
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

    updateFrom = (amount: number) => {
        this.setState({ fromAmount: amount});
    }
    selectCurrencyFrom = (currency: Currency) => {
        this.setState({fromCurrency: currency});
    }

    updateTo = (amount: number) => {
        this.setState({toAmount: amount});
    }
    selectCurrencyTo = (currency: Currency) => {
        this.setState({toCurrency: currency});
    }

    public render() {
        return (
            <div>
                <SourceComponent direction='from' currencies={this.props.currencies} onAmountUpdate={this.updateFrom} onSelectCurrency={this.selectCurrencyFrom} />
                <SourceComponent direction='to' currencies={this.props.currencies} onAmountUpdate={this.updateTo} onSelectCurrency={this.selectCurrencyTo} />
            </div>
        )
    }
}

export default FxCalculatorContainer;