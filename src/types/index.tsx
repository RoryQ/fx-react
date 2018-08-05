export interface SourceState {
    direction: SourceDirection;
}

export interface CurrencyState {
    currencies: Array<Currency>
}

export interface Currency {
    code: string,
    name: string,
    symbol?: string,
    flag?: string
}

export interface AppState {
    fromState: SourceState;
    toState: SourceState;
    currency: CurrencyState;
}

export type SourceDirection =
    | 'from'
    | 'to'