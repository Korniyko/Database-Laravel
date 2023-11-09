import { Router } from "express";
import { news  } from "./news";

const routes = Router()

routes.get('/news',news)

export default routes;