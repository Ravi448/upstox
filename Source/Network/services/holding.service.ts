import { IHoldingsData, IUserHolding } from "@app/Utils/holding.types"
import { API, NetworkManager } from "../core"
import { APIResponse } from "../core/responseParser"

export const fetchHoldings = async (): Promise<APIResponse<IUserHolding>> => {
  const instance = await NetworkManager(API.ROOT.Holdings)
  const response: APIResponse<IUserHolding> = await instance.request<IUserHolding>()
  return response
}