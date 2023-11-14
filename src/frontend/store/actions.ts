import { News } from "../type";

export const SET_NEWS = 'SET_NEWS';
export const SET_LOOP_NEWS = 'SET_LOOP_NEWS';
export const SET_NEWS_PARENT = 'SET_NEWS_PARENT';



export const setNews = (news:News[] ) =>{
   
    return {
        type: SET_NEWS,
        news
       
    };
} 

export const setlLoopNews = (loopNews:News[] ) =>{
   console.log(loopNews);
   
    return {
        type: SET_LOOP_NEWS,
        loopNews
       
    };
} 
export const setNewsWithParent = (newsWithParent:News[] ) =>{
   
    return {
        type: SET_NEWS_PARENT,
        newsWithParent
       
    };
} 