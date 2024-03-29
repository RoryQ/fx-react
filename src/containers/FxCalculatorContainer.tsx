import * as React from 'react';
import { Currency } from '../types';
import SourceComponent from '../components/SourceComponent';
import * as actions from '../actions';
import { RootState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface FxCalculatorContainerProps {
    currencies: ReadonlyArray<Currency>;
    fromAmount?: number;
    fromCurrency?: Currency;
    toAmount?: number;
    toCurrency?: Currency;
    rememberSelectionFrom: boolean;
    rememberSelectionTo: boolean;
}

export interface FxCalculatorContainerActions {
    updateFrom: (amount: number) => void;
    updateTo: (amount: number) => void;
    selectCurrencyFrom: (currency: Currency) => void;
    selectCurrencyTo: (currency: Currency) => void;
    onRememberSelectionFrom: (value: boolean) => void;
    onRememberSelectionTo: (value: boolean) => void;
}

export type FxCalculatorModel = FxCalculatorContainerProps & FxCalculatorContainerActions;
export function mapStateToProps(state: RootState): FxCalculatorContainerProps {

    const getCurrencyByCode = (code?: string): Currency | undefined => {
        if (code) return state.fx.currencyDict[code];
        return undefined;
    }

    return {
        currencies: state.fx.currencies,
        fromAmount: state.calc.fromState.amount,
        fromCurrency: getCurrencyByCode(state.calc.fromState.code),
        toAmount: state.calc.toState.amount,
        toCurrency: getCurrencyByCode(state.calc.toState.code),
        rememberSelectionFrom: state.calc.fromState.rememberSelection,
        rememberSelectionTo: state.calc.toState.rememberSelection
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.RootAction>): FxCalculatorContainerActions{
    return {
        updateFrom: (amount) => dispatch(actions.updateAmountFrom(amount)),
        updateTo: (amount) => dispatch(actions.updateAmountTo(amount)),
        selectCurrencyFrom: (currency) => dispatch(actions.selectCurrencyFrom(currency.code)),
        selectCurrencyTo: (currency) => dispatch(actions.selectCurrencyTo(currency.code)),
        onRememberSelectionFrom: (value) => dispatch(actions.rememberSelectionFrom(value)),
        onRememberSelectionTo: (value) => dispatch(actions.rememberSelectionTo(value))
    };
}

class FxCalculatorContainer extends React.Component<FxCalculatorModel> {
    constructor(props: FxCalculatorModel){
        super(props);
    }

    public render() {
        return (
            <div>
                <SourceComponent 
                     amount={this.props.fromAmount} 
                     currencies={this.props.currencies}
                     onAmountUpdate={this.props.updateFrom} 
                     onSelectCurrency={this.props.selectCurrencyFrom} 
                     selectedCurrency={this.props.fromCurrency != null ? this.props.fromCurrency!.code : undefined} 
                     rememberSelection={this.props.rememberSelectionFrom}
                     onRememberSelection={this.props.onRememberSelectionFrom}
                />
                <SourceComponent 
                    amount={this.props.toAmount} 
                    currencies={this.props.currencies} 
                    onAmountUpdate={this.props.updateTo} 
                    onSelectCurrency={this.props.selectCurrencyTo} 
                    selectedCurrency={this.props.toCurrency != null ? this.props.toCurrency!.code : undefined} 
                    rememberSelection={this.props.rememberSelectionTo}
                    onRememberSelection={this.props.onRememberSelectionTo}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FxCalculatorContainer);