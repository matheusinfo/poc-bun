import { HttpResponse } from './http'

export interface Controller<T = any> {
  handle(request: Controller.Request<T>): Promise<Controller.Response>
}

export namespace Controller {
  export type Request<T> = T

  export type Response = HttpResponse
}
