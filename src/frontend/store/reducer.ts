import { Reducer } from "redux";
import { SET_LOOP_NEWS, SET_NEWS, SET_NEWS_PARENT } from "./actions";
import { NewsState } from "../type";



export const news: Reducer<NewsState> = (state, action): NewsState => {
  if (!state) {
    return []
  }

  switch (action.type) {

    case SET_NEWS:
      return action.news


    default:
      return state;
  };
}

export const loopNews: Reducer<NewsState> = (state, action): NewsState => {
  if (!state) {
    return []
  }

  switch (action.type) {


    case SET_LOOP_NEWS:
      return action.loopNews


    default:
      return state;
  };
}

export const newsWithParent: Reducer<NewsState> = (state, action): NewsState => {
  if (!state) {
    return []
  }

  switch (action.type) {


    case SET_NEWS_PARENT:
      return action.newsWithParent


    default:
      return state;
  };
}




