import { IHoldings, IPortfolio } from "./holding.types";

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


export function portfolioCalculator(stocks: Array<IHoldings>): IPortfolio {
  let currentValue: number = 0, totalInvestment: number = 0, daysPL: number = 0

  stocks.forEach((stock) => {
    currentValue += (stock.ltp * stock.quantity)
    totalInvestment += (stock.avgPrice * stock.quantity)
    daysPL += ((stock.close - stock.ltp) * stock.quantity)
  })

  return {
    currentValue,
    totalInvestment,
    daysPL,
    lifetimePL: currentValue - totalInvestment
  }
}