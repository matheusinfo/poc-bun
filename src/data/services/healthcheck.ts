import { Healthcheck } from "../usecases"

export class HealthcheckService implements Healthcheck {
  async check(): Promise<Healthcheck.Result> {
    return "Server is up and running!"
  }
}
