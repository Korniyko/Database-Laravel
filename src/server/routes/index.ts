import { Router } from "express";
import { getProducts } from "./getProducts";

const routes = Router()

routes.get('/getProducts',getProducts)

export default routes;