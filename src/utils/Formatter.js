export const currencyFormat = (value) => new Intl.NumberFormat('th', {
    style: 'currency',
    currency: 'THB'
}).format(value);
//Example: ฿50,000.00