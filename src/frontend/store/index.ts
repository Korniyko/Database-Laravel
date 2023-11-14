import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"
import thunk from 'redux-thunk';
import { loopNews, news, newsWithParent } from "./reducer";


const initialState ={}

const reducers = combineReducers({
  news,
  loopNews,
  newsWithParent
    
})
const composeEnhancers = (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;
  
export default () => createStore(reducers,composeEnhancers(applyMiddleware(thunk)))