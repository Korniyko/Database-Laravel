import React, { useState, useEffect } from "react";
import './Reset.scss'
import './App.scss'
import Spinner from './Spiner';
import { News } from "../type";

type AppProps = {
    news: (value: number) => void,
    getLoopNews: () => void;
    getNewsWithParent: (parentId: string) => void;
    loopNewsState: News[] | [];
    newsState: News[] | [];
    newsWithParentState: News[] | [];

}

const App = ({ news, newsState, getLoopNews, loopNewsState, getNewsWithParent, newsWithParentState }: AppProps) => {

    console.log(newsWithParentState);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                await news(10);
                getLoopNews();
                getNewsWithParent('100')

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [news]);

    const changePerPage = (value) => {
        news(value);
    }

    return (
        <div className="AppContainer">

            <div className="buttonsSort">
                <button onClick={() => changePerPage(10)}>10</button>
                <button onClick={() => changePerPage(20)}>20</button>
                <button onClick={() => changePerPage(50)}>50</button>

            </div>
            <div className="newsContainer">
                {loading ? (

                    <Spinner />
                ) : (
                    <>
                        <h1> React
                            Односторінковий додаток для виведення новин із API Laravel
                            з урахуванням сортування (за датою) і кількості записів (10, 20, 50).</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Title</td>
                                    <td>Description</td>
                                    <td>Parent_id</td>
                                    <td>Created_at</td>
                                    <td>Updated_at</td>
                                </tr>
                            </thead>
                            <tbody>
                                {newsState?.map((el) => (

                                    <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.title}</td>
                                        <td>{el.description}</td>
                                        <td>{el.parent_id}</td>
                                        <td>{el.created_at}</td>
                                        <td>{el.updated_at}</td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <h1>Виведіть записи з бази новин різними циклами for, foreach, while,
                            в інтервалі між 120 - 150 (30 записів), де дата публікації більше
                            вчорашньої і дата оновлення менше завтрашньої. Дані збережіть в
                            асоціативний масив. І в циклі виведіть перші 3 елементи масиву.</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Title</td>
                                    <td>Description</td>
                                    <td>Parent_id</td>
                                    <td>Created_at</td>
                                    <td>Updated_at</td>
                                </tr>
                            </thead>
                            <tbody>
                                {loopNewsState?.map((el) => (

                                    <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.title}</td>
                                        <td>{el.description}</td>
                                        <td>{el.parent_id}</td>
                                        <td>{el.created_at}</td>
                                        <td>{el.updated_at}</td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <h1>PHP (самописний)
                            виведіть список новин разом із батьківськими за parent_id = :x.</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Title</td>
                                    <td>Description</td>
                                    <td>Parent_id</td>
                                    <td>Created_at</td>
                                    <td>Updated_at</td>
                                </tr>
                            </thead>
                            <tbody>
                                {newsWithParentState?.map((el) => (

                                    <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.title}</td>
                                        <td>{el.description}</td>
                                        <td>{el.parent_id}</td>
                                        <td>{el.created_at}</td>
                                        <td>{el.updated_at}</td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    )
}
export default App;
