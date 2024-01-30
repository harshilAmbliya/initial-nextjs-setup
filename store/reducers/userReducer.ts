import { ReduxActionType } from "@/types/reduxActionType"
import { userActionType } from "../../constants/index"

const INITIAL_STATE = {}

const userReducer = (state = INITIAL_STATE, action: ReduxActionType) => {
  switch (action.type) {
    case userActionType.FETCH_USERS:
      return action?.payload
    case userActionType.FETCH_USER:
      return action?.payload
    default:
      return state
  }
}

export default userReducer
