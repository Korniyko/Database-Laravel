import { setlLoopNews } from "../store/actions"
import { NewsState } from "../type"



export const getLoopNews = () => (dispatch: any, getState: () => any): Promise<void> => {

    return fetch('http://localhost:8000/api/showNews', {
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
        .then((data: NewsState) => {
            dispatch(setlLoopNews(data))

        })
        .catch((error: Error) => {
            console.error(`Error happened on getLoopNews:${error}`)
        })
}