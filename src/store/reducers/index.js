import { combineReducers } from 'redux'
import matchReducer from './matchReducer'

export default combineReducers({
  matchList: matchReducer
})