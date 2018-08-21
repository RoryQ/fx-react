import * as R from "ramda";

export const SELECT_CURRENCY_FROM = 'SELECT_CURRENCY_FROM';
export type SELECT_CURRENCY_FROM = typeof SELECT_CURRENCY_FROM;

export const UPDATE_AMOUNT_FROM = 'UPDATE_AMOUNT_FROM';
export type UPDATE_AMOUNT_FROM = typeof UPDATE_AMOUNT_FROM;

export const SELECT_CURRENCY_TO = 'SELECT_CURRENCY_TO';
export type SELECT_CURRENCY_TO = typeof SELECT_CURRENCY_TO;

export const REMEMBER_SELECTION_FROM = 'REMEMBER_SELECTION_FROM';
export type REMEMBER_SELECTION_FROM = typeof REMEMBER_SELECTION_FROM;

export const REMEMBER_SELECTION_TO = 'REMEMBER_SELECTION_TO';
export type REMEMBER_SELECTION_TO = 'REMEMBER_SELECTION_TO';

export const UPDATE_AMOUNT_TO = 'UPDATE_AMOUNT_TO';
export type UPDATE_AMOUNT_TO = typeof UPDATE_AMOUNT_TO;

export const LOAD_FX_RATES = 'LOAD_FX_RATES';
export type LOAD_FX_RATES = typeof LOAD_FX_RATES;


export const symbols = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': '֏',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': '$b',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'Br',
  'BYN': 'Br',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'CHF',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': 'лв',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MRO': 'UM',
  'MRU': 'UM',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'STN': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
}

const countryCurrency =
[
	{ "country": "AE", "currency": "AED" },
	{ "country": "AF", "currency": "AFN" },
	{ "country": "AG", "currency": "XCD" },
	{ "country": "AI", "currency": "XCD" },
	{ "country": "AL", "currency": "ALL" },
	{ "country": "AM", "currency": "AMD" },
	{ "country": "AO", "currency": "AOA" },
	{ "country": "AR", "currency": "ARS" },
	{ "country": "AU", "currency": "AUD" },
	{ "country": "AW", "currency": "AWG" },
	{ "country": "AZ", "currency": "AZN" },
	{ "country": "BA", "currency": "BAM" },
	{ "country": "BB", "currency": "BBD" },
	{ "country": "BD", "currency": "BDT" },
	{ "country": "BF", "currency": "XOF" },
	{ "country": "BG", "currency": "BGN" },
	{ "country": "BH", "currency": "BHD" },
	{ "country": "BI", "currency": "BIF" },
	{ "country": "BJ", "currency": "XOF" },
	{ "country": "BM", "currency": "BMD" },
	{ "country": "BN", "currency": "BND" },
	{ "country": "BO", "currency": "BOB" },
	{ "country": "BR", "currency": "BRL" },
	{ "country": "BS", "currency": "BSD" },
	{ "country": "BT", "currency": "INR" },
	{ "country": "BV", "currency": "NOK" },
	{ "country": "BW", "currency": "BWP" },
	{ "country": "BY", "currency": "BYR" },
	{ "country": "BZ", "currency": "BZD" },
	{ "country": "CA", "currency": "CAD" },
	{ "country": "CD", "currency": "CDF" },
	{ "country": "CG", "currency": "XAF" },
	{ "country": "CH", "currency": "CHF" },
	{ "country": "CI", "currency": "XOF" },
	{ "country": "CK", "currency": "NZD" },
	{ "country": "CL", "currency": "CLP" },
	{ "country": "CM", "currency": "XAF" },
	{ "country": "CN", "currency": "CNY" },
	{ "country": "CO", "currency": "COP" },
	{ "country": "CR", "currency": "CRC" },
	{ "country": "CU", "currency": "CUP" },
	{ "country": "CV", "currency": "CVE" },
	{ "country": "CW", "currency": "ANG" },
	{ "country": "CZ", "currency": "CZK" },
	{ "country": "DJ", "currency": "DJF" },
	{ "country": "DK", "currency": "DKK" },
	{ "country": "DM", "currency": "XCD" },
	{ "country": "DO", "currency": "DOP" },
	{ "country": "DZ", "currency": "DZD" },
	{ "country": "EG", "currency": "EGP" },
	{ "country": "EH", "currency": "MAD" },
	{ "country": "ER", "currency": "ERN" },
	{ "country": "ET", "currency": "ETB" },
	{ "country": "EU", "currency": "EUR" },
	{ "country": "FJ", "currency": "FJD" },
	{ "country": "FK", "currency": "FKP" },
	{ "country": "GB", "currency": "GBP" },
	{ "country": "GD", "currency": "XCD" },
	{ "country": "GE", "currency": "GEL" },
	{ "country": "GG", "currency": "GGP" },
	{ "country": "GH", "currency": "GHS" },
	{ "country": "GI", "currency": "GIP" },
	{ "country": "GM", "currency": "GMD" },
	{ "country": "GN", "currency": "GNF" },
	{ "country": "GT", "currency": "GTQ" },
	{ "country": "GW", "currency": "XOF" },
	{ "country": "GY", "currency": "GYD" },
	{ "country": "HK", "currency": "HKD" },
	{ "country": "HN", "currency": "HNL" },
	{ "country": "HR", "currency": "HRK" },
	{ "country": "HT", "currency": "HTG" },
	{ "country": "HU", "currency": "HUF" },
	{ "country": "ID", "currency": "IDR" },
	{ "country": "IL", "currency": "ILS" },
	{ "country": "IN", "currency": "INR" },
	{ "country": "IQ", "currency": "IQD" },
	{ "country": "IR", "currency": "IRR" },
	{ "country": "IS", "currency": "ISK" },
	{ "country": "JM", "currency": "JMD" },
	{ "country": "JO", "currency": "JOD" },
	{ "country": "JP", "currency": "JPY" },
	{ "country": "KE", "currency": "KES" },
	{ "country": "KG", "currency": "KGS" },
	{ "country": "KH", "currency": "KHR" },
	{ "country": "KM", "currency": "KMF" },
	{ "country": "KN", "currency": "XCD" },
	{ "country": "KP", "currency": "KPW" },
	{ "country": "KR", "currency": "KRW" },
	{ "country": "KW", "currency": "KWD" },
	{ "country": "KY", "currency": "KYD" },
	{ "country": "KZ", "currency": "KZT" },
	{ "country": "LA", "currency": "LAK" },
	{ "country": "LB", "currency": "LBP" },
	{ "country": "LC", "currency": "XCD" },
	{ "country": "LK", "currency": "LKR" },
	{ "country": "LR", "currency": "LRD" },
	{ "country": "LS", "currency": "LSL" },
	{ "country": "LY", "currency": "LYD" },
	{ "country": "MA", "currency": "MAD" },
	{ "country": "MD", "currency": "MDL" },
	{ "country": "MG", "currency": "MGA" },
	{ "country": "MK", "currency": "MKD" },
	{ "country": "ML", "currency": "XOF" },
	{ "country": "MM", "currency": "MMK" },
	{ "country": "MN", "currency": "MNT" },
	{ "country": "MO", "currency": "MOP" },
	{ "country": "MR", "currency": "MRO" },
	{ "country": "MS", "currency": "XCD" },
	{ "country": "MU", "currency": "MUR" },
	{ "country": "MV", "currency": "MVR" },
	{ "country": "MW", "currency": "MWK" },
	{ "country": "MX", "currency": "MXN" },
	{ "country": "MY", "currency": "MYR" },
	{ "country": "MZ", "currency": "MZN" },
	{ "country": "NA", "currency": "NAD" },
	{ "country": "NC", "currency": "XPF" },
	{ "country": "NE", "currency": "XOF" },
	{ "country": "NG", "currency": "NGN" },
	{ "country": "NI", "currency": "NIO" },
	{ "country": "NO", "currency": "NOK" },
	{ "country": "NP", "currency": "NPR" },
	{ "country": "NU", "currency": "NZD" },
	{ "country": "NZ", "currency": "NZD" },
	{ "country": "OM", "currency": "OMR" },
	{ "country": "PA", "currency": "PAB" },
	{ "country": "PE", "currency": "PEN" },
	{ "country": "PF", "currency": "XPF" },
	{ "country": "PG", "currency": "PGK" },
	{ "country": "PH", "currency": "PHP" },
	{ "country": "PK", "currency": "PKR" },
	{ "country": "PL", "currency": "PLN" },
	{ "country": "PN", "currency": "NZD" },
	{ "country": "PS", "currency": "JOD" },
	{ "country": "PY", "currency": "PYG" },
	{ "country": "QA", "currency": "QAR" },
	{ "country": "RO", "currency": "RON" },
	{ "country": "RS", "currency": "RSD" },
	{ "country": "RU", "currency": "RUB" },
	{ "country": "RW", "currency": "RWF" },
	{ "country": "SA", "currency": "SAR" },
	{ "country": "SB", "currency": "SBD" },
	{ "country": "SC", "currency": "SCR" },
	{ "country": "SD", "currency": "SDG" },
	{ "country": "SE", "currency": "SEK" },
	{ "country": "SG", "currency": "SGD" },
	{ "country": "SH", "currency": "SHP" },
	{ "country": "SJ", "currency": "NOK" },
	{ "country": "SL", "currency": "SLL" },
	{ "country": "SN", "currency": "XOF" },
	{ "country": "SO", "currency": "SOS" },
	{ "country": "SR", "currency": "SRD" },
	{ "country": "SS", "currency": "SSP" },
	{ "country": "ST", "currency": "STD" },
	{ "country": "SX", "currency": "ANG" },
	{ "country": "SY", "currency": "SYP" },
	{ "country": "SZ", "currency": "SZL" },
	{ "country": "TD", "currency": "XAF" },
	{ "country": "TG", "currency": "XOF" },
	{ "country": "TH", "currency": "THB" },
	{ "country": "TJ", "currency": "TJS" },
	{ "country": "TK", "currency": "NZD" },
	{ "country": "TM", "currency": "TMT" },
	{ "country": "TN", "currency": "TND" },
	{ "country": "TO", "currency": "TOP" },
	{ "country": "TR", "currency": "TRY" },
	{ "country": "TT", "currency": "TTD" },
	{ "country": "TW", "currency": "TWD" },
	{ "country": "TZ", "currency": "TZS" },
	{ "country": "UA", "currency": "UAH" },
	{ "country": "UG", "currency": "UGX" },
	{ "country": "US", "currency": "USD" },
	{ "country": "UY", "currency": "UYU" },
	{ "country": "UZ", "currency": "UZS" },
	{ "country": "VC", "currency": "XCD" },
	{ "country": "VE", "currency": "VEF" },
	{ "country": "VN", "currency": "VND" },
	{ "country": "VU", "currency": "VUV" },
	{ "country": "WF", "currency": "XPF" },
	{ "country": "YE", "currency": "YER" },
	{ "country": "ZA", "currency": "ZAR" },
	{ "country": "ZM", "currency": "ZMW" },
]


const currencyMap = R.indexBy(x => x.currency,
	R.map(x => { return { ...x, country: x.country.toLowerCase() } },
		countryCurrency));

export const countryByCurrency = (code: string): string => {
	if (code in currencyMap) {
		return currencyMap[code].country;
	}
	return '';
}