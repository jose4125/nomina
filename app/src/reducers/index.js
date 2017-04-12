import { combineReducers } from 'redux'
import EmployeeReducer from './employees-reducer'

const rootReducer = combineReducers({
  employees: EmployeeReducer
})

export default rootReducer
