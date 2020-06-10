import CounterReducer from "./counter";
import LoggedReducer from "./login";
import {combineReducers} from "redux";

const allReducers = combineReducers({

    //När nyckelnamn är lika som värdet behöver man inte skriva ut nyckeln
    /* 
    CounterReducer: CounterReducer,
    LoggedReducer: LoggedReducer 
       */

    CounterReducer ,
    LoggedReducer
})

export default allReducers;