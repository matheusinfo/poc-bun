import { Healthcheck } from '../../data/usecases'
import { success, serverError, Controller } from '../helpers'

export class HealthcheckController implements Controller {
  constructor(
    private readonly healthCheck: Healthcheck
  ) { }

  async handle(): Promise<Controller.Response> {
    try {
      return success({
        message: await this.healthCheck.check()
      })
    } catch (error) {
      return serverError(error)
    }
  }
}

