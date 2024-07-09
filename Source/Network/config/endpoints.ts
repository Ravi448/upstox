// List all endpoints here
import { APIRouter } from "../core/httpHelper"

export const API = {
  ROOT: {
    Holdings: new APIRouter("/", "GET")
  }
}
