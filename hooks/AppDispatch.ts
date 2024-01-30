import { RootState } from "@/store/reducers"
import { useDispatch, useSelector } from "react-redux"

export const useAppDispatch = () => {
  const dispatch: any = useDispatch()
  return dispatch
}
// export const AppSelector: any = useSelector((state: any) => state)
export function useAppSelector<T>(reducerName: keyof RootState): T {
  const state = useSelector((state: RootState) => state[reducerName])
  return { ...state } as T
}
