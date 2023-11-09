import { Request, Response } from "express"
import productJson from '../mock/Products.json'


export  const getProducts = async (request: Request,response: Response) => {

    try {
        console.log(productJson)

           const productsData  =  productJson
        //    console.log(productsData)
        response.json(productsData)
    } catch (error: any) {
        console.log(`error happend on route getProducts:${error.message}`)
        response.sendStatus(500)
    }

}