import { Controller } from "./protocols"

export type Router = {
  method: string
  path: string
  controller: Controller
}