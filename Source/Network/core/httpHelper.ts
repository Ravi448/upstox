import { APIConfig } from "../config/serverConfig"

export type HttpMethod = "GET" | "POST"

/**
 * @description API Router
 */
export class APIRouter {
  baseURL: string | undefined
  endpoint: string
  method: HttpMethod
  version: string | null

  constructor(
    endpoint: string,
    method: HttpMethod,
    version: string | null = APIConfig.DEFAULT_VERSION
  ) {
    this.baseURL = APIConfig.BASE_URL
    this.endpoint = endpoint
    this.method = method
    this.version = version
  }
}

export function urlBuilder(router: APIRouter): string {
  let uri = ""
  if (typeof router.version === "string") {
    uri = `/${router.version}`
  }
  return uri
}
