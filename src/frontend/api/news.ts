import { application } from "express"
import { setNews } from "../store/actions"






export const news = (value) => (dispatch: any, getState: () => any): Promise<void> => {



    return fetch(`http://127.0.0.1:8000/api/news/?per_page=${value}`, {
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        method: 'GET',

    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error(response.statusText)

        }
        return response
    })
        .then((response: Response) => response.json())
        .then((data: any) => {
            dispatch(setNews(data.data))

        //    console.log(data);
           

        })
        .catch((error: Error) => {
            console.error(`Error happend on getProducts:${error}`)
        })
}    