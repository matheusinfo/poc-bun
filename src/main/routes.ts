import { HealthcheckService } from "../data/services";
import { HealthcheckController } from "../presentation/controllers";

const routes = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  const responses: { [key: string]: () => Promise<Response> } = {
    "/api/healthcheck": async () => {
      const healthCheckService = new HealthcheckService();
      const healthcheckController = await new HealthcheckController(healthCheckService).handle();
      return new Response(JSON.stringify(healthcheckController.body), {
        status: healthcheckController.statusCode,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },
    default: async () => new Response("Not Found", {
      status: 404
    }),
  };

  if (responses[url.pathname]) {
    return await responses[url.pathname]();
  }

  return await responses.default();
};

export default routes;