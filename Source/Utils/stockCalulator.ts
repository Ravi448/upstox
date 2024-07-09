import { IHoldings } from "./holding.types";

export const IntlFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  maximumFractionDigits: 2,
  currency: "INR"
})

export function calculatePL(stock: IHoldings): number {
  const currentValue = stock.ltp * stock.quantity
  const investmentValue = stock.avgPrice * stock.quantity
  return currentValue - investmentValue
}