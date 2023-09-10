import { Router } from "../../presentation/helpers/router";

export const adaptRoute = (routes: Router[]) => {
  return async (req: Request) => {
    const splittedUrl = `/api${req.url.split('/api')[1]}`
    const currentRoute = routes.find(route => route.path === splittedUrl && route.method.toLowerCase() === req.method.toLowerCase())

    if (!currentRoute) {
      return new Response("Route not found :(", {
        status: 404
      })
    }

    const httpResponse = await currentRoute.controller.handle(req)

    return new Response(JSON.stringify(httpResponse.body), {
      status: httpResponse.statusCode,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

