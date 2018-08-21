import * as React from 'react';
import * as SemUI from 'semantic-ui-react';
import * as R from 'ramda';
import { Currency } from '../types';
import { Segment } from 'semantic-ui-react';


export interface SourceComponentProps {
    currencies: ReadonlyArray<Currency>;
    amount?: number;
    selectedCurrency?: string;
    rememberSelection: boolean;
}

export interface SourceComponentActions {
    onSelectCurrency: (currency: Currency) => void;
    onAmountUpdate: (amount: number) => void;
    onRememberSelection: (value: boolean) => void;
}

export type SourceComponentModel = SourceComponentProps & SourceComponentActions;

interface SourceComponentState {
    selectedCurrencySymbol?: string;
}


function CurrencyToDropdownProp(c: Currency): SemUI.DropdownItemProps {
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
        this.handleRememberSelection = this.handleRememberSelection.bind(this);
        this.state = {

        }
    }

    handleRememberSelection(event: React.SyntheticEvent<HTMLInputElement>, data: SemUI.CheckboxProps) {
        this.props.onRememberSelection(data.checked!);
    }

    handleAmountChange(event: React.SyntheticEvent<HTMLInputElement>, data: SemUI.InputOnChangeData) {
        let x = parseFloat(data.value);

        console.log(x||0);
        this.props.onAmountUpdate(x||0);
    }

    handleSelectCurrency(event: React.SyntheticEvent<HTMLInputElement>, data: SemUI.InputOnChangeData) {
        let currency = this.props.currencies.find(x => x.code == data.value);
        if (currency) {
            this.props.onSelectCurrency(currency);
            this.setState({ selectedCurrencySymbol: currency.symbol });
        }
    }

    public render() {
        let currencyOptions = R.map(CurrencyToDropdownProp, this.props.currencies);

        return (
            <SemUI.Segment.Group>
                <SemUI.Segment>
                    <SemUI.Header as='h3'>
                        <SemUI.Input size='huge' fluid labelPosition='right' type='number' onChange={this.handleAmountChange}>
                            <SemUI.Label icon={this.showMoneyIcon()} >{this.state.selectedCurrencySymbol}</SemUI.Label>
                            <input value={this.props.amount||0} type='number' inputMode='numeric' pattern='[0-9]*' step="0.1" />
                            <SemUI.Responsive minWidth={SemUI.Responsive.onlyTablet.minWidth}>
                                <SemUI.Segment>
                                    <SemUI.Dropdown
                                        search
                                        selection
                                        value={this.props.selectedCurrency}
                                        placeholder='Select Currency'
                                        options={currencyOptions}
                                        onChange={this.handleSelectCurrency} />
                                    <SemUI.Divider></SemUI.Divider>
                                    <SemUI.Radio label="Remember Selection" toggle checked={this.props.rememberSelection} onClick={this.handleRememberSelection}/>
                                </SemUI.Segment>
                            </SemUI.Responsive>
                        </SemUI.Input>
                    </SemUI.Header>
                </SemUI.Segment>
                <SemUI.Responsive {...SemUI.Responsive.onlyMobile}>
                    <SemUI.Segment>
                        <SemUI.Header as='h3'>
                            <SemUI.Header.Content>
                                <Segment >
                                    <SemUI.Dropdown
                                        search
                                        selection
                                        value={this.props.selectedCurrency}
                                        placeholder='Select Currency'
                                        options={currencyOptions}
                                        onChange={this.handleSelectCurrency}
                                    />

                                    <SemUI.Radio toggle checked={this.props.rememberSelection} onClick={this.handleRememberSelection} />
                                </Segment>
                            </SemUI.Header.Content>
                        </SemUI.Header>
                    </SemUI.Segment>
                </SemUI.Responsive>
            </SemUI.Segment.Group>
        );
    }

    private showMoneyIcon(): SemUI.SemanticShorthandItem<SemUI.IconProps> {
        return !this.state.selectedCurrencySymbol ? <SemUI.Icon name='money bill alternate' /> : null;
    }
}

export default SourceComponent;
