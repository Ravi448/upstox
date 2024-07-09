import { APIConfig } from "../config/serverConfig"

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

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

export function urlBuilder(router: APIRouter, params: string[] | object): string {
  let uri = ""
  if (typeof router.version === "string") {
    uri = `/${router.version}`
  }
  uri = uri.concat(router.endpoint)
  // all params in form of uri/id1/id2/id3
  if (Array.isArray(params)) {
    for (let key of params) {
      uri = uri.concat("/", key)
    }
  }
  return uri
}
