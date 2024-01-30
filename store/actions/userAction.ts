import axios from "axios"
import { userActionType } from "../../constants/index"

export const fetchUsers = () => async (dispatch: any) => {
  const { data } = await axios.get("/api/users")
  dispatch({
    type: userActionType.FETCH_USERS,
    payload: data,
  })
}

export const fetchOneUser = (id: any) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/users/${id}`)
  dispatch({
    type: userActionType.FETCH_USER,
    payload: data,
  })
}
