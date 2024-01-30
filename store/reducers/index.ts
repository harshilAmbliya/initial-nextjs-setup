import { combineReducers } from "redux"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  //   counter: counterReducer,
  users: userReducer,
})

export type userReducerType = ReturnType<typeof userReducer>

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
