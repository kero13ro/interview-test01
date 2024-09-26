export const currencyFormat = (val: number) => {
  return Math.abs(val).toLocaleString('en-us', { style: 'currency', currency: 'USD' })
}
