
export interface IHoldings {
  symbol: string
  quantity: number
  ltp: number
  avgPrice: number
  close: number
}

export interface IUserHolding {
  userHolding: Array<IHoldings>
}

export interface IHoldingsData {
  data: IUserHolding
}

export interface IPortfolio {
  currentValue: number
  totalInvestment: number
  daysPL: number
  lifetimePL: number
}