
import { Request, Response } from "express";
import News from '../mock/News.json';

export const news = async (request: Request, response: Response) => {
    try {
        console.log(News);

      
        const productsData = News;

        response.json(productsData);
    } catch (error: any) {
        console.log(`error happened on route news: ${error.message}`);
        response.sendStatus(500);
    }
};
