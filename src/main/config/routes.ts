import { readdirSync } from "fs";
import { Router } from "../../presentation/helpers/router";

const routes = async (): Promise<Router[]> => {
  const router: Router[] = [];

  readdirSync(`${import.meta.dir}/../routes`).map(async file => {
    (await import(`../routes/${file}`)).default(router)
  })

  return router;
};

export default await routes();
