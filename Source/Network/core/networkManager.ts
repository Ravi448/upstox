// Higher Order Class to make all network calls
import axios from "axios"
import { urlBuilder } from "./httpHelper"
import { APIConfig } from "../config/serverConfig"
import { APIError, APIResponse } from "./responseParser"
import { APIRouter } from "./httpHelper"

//#region  Main Function
export default async function networkManager(router: APIRouter) {
  const { TIMEOUT, CONTENT_TYPE } = APIConfig

  axios.defaults.baseURL = router.baseURL
  axios.defaults.timeout = TIMEOUT
  axios.defaults.headers.common["Content-Type"] = CONTENT_TYPE.JSON
  axios.defaults.headers.common["Accept-Language"] = "en"

  //#region  Network Call
  /**
   * Asynchronous function that sends a request to an API and returns a promise that resolves to an APIResponse object.
   *
   * @param body - The request body as a Record<string, any> object. Default is an empty object.
   * @param params - The request parameters as an object or an array. Default is an empty object.
   * @returns A promise that resolves to an APIResponse object.
   */
  async function request<T>(
    params = {} || []
  ): Promise<APIResponse<T>> {
    const url = urlBuilder(router, params)

    try {
      const result = await axios.request({
        url: url,
        method: router.method
      })

      const response = result.data
      return new APIResponse(response.data, response.success, result.status, response.data?.message)
    } catch (err: any) {
      // Catch all errors
      return new APIError(err.message, err.code)
    }
  }
  return {
    request
  }
}