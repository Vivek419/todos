
import { combineReducers } from 'redux'
import todo from './reducer'

const allReducer = combineReducers({ todo });
export default allReducer