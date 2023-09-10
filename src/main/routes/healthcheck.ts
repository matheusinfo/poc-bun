import { HealthcheckService } from "../../data/services";
import { HealthcheckController } from "../../presentation/controllers";
import { Router } from "../../presentation/helpers/router";

export default (router: Router[]): void => {
  const healthCheckService = new HealthcheckService();
  const healthcheckController = new HealthcheckController(healthCheckService)

  router.push({
    method: 'get',
    path: '/api/healthcheck',
    controller: healthcheckController
  })
}
