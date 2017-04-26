import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import Reducers from "./Reducers/ReducersBootstraper";
import InitialState from "./Entities/InitialState"

const JunkStore = applyMiddleware(thunk)(createStore)(Reducers, InitialState())
export default JunkStore