import * as React from 'react';
import {Dropdown, DropdownItemProps, Segment, Header, Input, Label, Responsive, Icon, InputOnChangeData} from 'semantic-ui-react';
import * as R from 'ramda';
import { Currency } from '../types';


export interface SourceComponentProps {
    currencies: ReadonlyArray<Currency>;
    amount?: number;
    selectedCurrency?: string;
}

export interface SourceComponentActions {
    onSelectCurrency: (currency: Currency) => void;
    onAmountUpdate: (amount: number) => void;
}

export type SourceComponentModel = SourceComponentProps & SourceComponentActions;

interface SourceComponentState {
    selectedCurrencySymbol?: string;
}


function CurrencyToDropdownProp(c: Currency): DropdownItemProps {
    return {
        value: c.code,
        text: `${c.name} - ${c.code}`,
        flag: c.flag
    };
}

class SourceComponent extends React.Component<SourceComponentModel, SourceComponentState> {
    constructor(props: SourceComponentModel) {
        super(props);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSelectCurrency = this.handleSelectCurrency.bind(this);
        this.state = {

        }
    }

    handleAmountChange( event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
        this.props.onAmountUpdate(parseFloat(data.value));
    }

    handleSelectCurrency(event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
        let currency = this.props.currencies.find(x => x.code == data.value);
        if (currency){
             this.props.onSelectCurrency(currency);
             this.setState({selectedCurrencySymbol: currency.symbol});
        }
    }

    public render() {
        let currencyOptions = R.map(CurrencyToDropdownProp, this.props.currencies);

        return (
            <Segment.Group>
                <Segment>
                    <Header as='h3'>
                        <Input size='huge' fluid labelPosition='right' type='number' placeholder='Enter Amount' onChange={this.handleAmountChange}>
                            <Label fluid icon={!this.state.selectedCurrencySymbol ? <Icon name='money bill alternate'/> : null} >{this.state.selectedCurrencySymbol}</Label>
                            <input value={this.props.amount ? this.props.amount.toFixed(2): 0}/>
                            <Label >
                                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                                    <Dropdown value={this.props.selectedCurrency} placeholder='Select Currency' search selection options={currencyOptions} onChange={this.handleSelectCurrency}/>
                                </Responsive>
                            </Label>
                        </Input>
                    </Header>
                </Segment>
                <Responsive {...Responsive.onlyMobile}>
                    <Segment>
                        <Header as='h3'>
                        <Header.Content>
                            <Dropdown value={this.props.selectedCurrency}placeholder='Select Currency' search selection options={currencyOptions}  onChange={this.handleSelectCurrency}/>
                        </Header.Content>
                        </Header>
                    </Segment>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default SourceComponent;
