import { application } from "express"






export const news = () => (dispatch: any, getState: () => any): Promise<void> => {

    return fetch('http://localhost:6500/api/news', {
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
            // dispatch(setColor(data))

            // console.log(data)

        })
        .catch((error: Error) => {
            console.error(`Error happend on getProducts:${error}`)
        })
}    