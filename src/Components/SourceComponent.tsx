import * as React from 'react';
import {Dropdown, DropdownItemProps, Icon, Segment, Header} from 'semantic-ui-react';
import * as R from 'ramda';


export interface SourceProps {

}

interface SourceState {
    currencies: Array<Currency>
}

interface Currency {
    code: string,
    name: string,
    flag?: string
}

function CurrencyToDropdownProp(c: Currency): DropdownItemProps {
    return {
        value: c.code,
        text: c.name,
        flag: c.flag
    };
}

const defaultAmountOptions = [
    { key: 100, text: '100', value: 100 },
    { key: 200, text: '200', value: 200 },
    { key: 300, text: '300', value: 300 },
    { key: 400, text: '400', value: 400 },
    { key: 500, text: '500', value: 500 },
]

class SourceComponent extends React.Component<SourceProps, SourceState> {
    constructor(props: SourceProps) {
        super(props);
        this.state = {
            currencies: [{ code: 'GBP', name: 'Pounds Sterling', flag: 'gb' }, {code: 'AUD', name: 'Australian Dollar', flag: 'au'}]
        }
    }

    public render() {
        return (
            <Segment.Group>
                <Segment>
                    <Header as='h3'>
                        <Icon name='money bill alternate' />
                        <Header.Content>
                            <Dropdown placeholder='Enter amount...' search searchInput={{ type: 'number' }} selection options={defaultAmountOptions} />
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Header as='h3'>
                        <Icon name='globe' />
                        <Header.Content>
                            <Dropdown placeholder='Select Currency' fluid search selection options={R.map(CurrencyToDropdownProp, this.state.currencies)} />
                        </Header.Content>
                    </Header>
                </Segment>
            </Segment.Group>
        );
    }
}

export default SourceComponent;
