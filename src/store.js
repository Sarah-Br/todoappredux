import {createStore} from "redux"
import {Todoreducer} from "./Reducer/Todoreducer"

export const store = createStore(Todoreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())