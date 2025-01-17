
/**
 * @description API Success model
 */
export class APIResponse<T> {
  data: T | T[] | null
  success: boolean
  code: Number
  message: string
  error: string | null

  constructor(
    data: T | T[] | null,
    success: boolean,
    code: Number,
    message: string = ""
  ) {
    this.success = success
    this.data = data
    this.error = null
    this.message = message
    this.code = code
  }
}

/**
 * @description API Error model
 */
export class APIError<T> {
  data: T | T[] | null
  success: boolean
  code: Number
  message: string
  error: string

  constructor(error = "", code: Number) {
    this.success = false
    this.data = null
    this.error = error
    this.message = error
    this.code = code
  }
}
