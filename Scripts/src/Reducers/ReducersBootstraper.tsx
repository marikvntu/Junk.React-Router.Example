import { combineReducers } from 'redux'
import Outlets from "./OutletsReducer"
import Filter from "./FilterReducer"

export default combineReducers({ Outlets, Filter });