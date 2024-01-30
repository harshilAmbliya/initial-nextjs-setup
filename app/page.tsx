"use client"
import MasterLayout from "@/components/Layout/MasterLayout"
import ThemeToggler from "@/components/theme/theme-toggler"
import { Button } from "@/components/ui/button"
import { fetchOneUser, fetchUsers } from "@/store/actions/userAction"
import { useAppDispatch, useAppSelector } from "@/hooks/AppDispatch"

export default function Home() {
  const dispatch = useAppDispatch()
  const selector = useAppSelector("users")
  const fetchUsersData = () => {
    dispatch(fetchUsers())
  }
  const fetchOneUserData = (e: any, id: any) => {
    dispatch(fetchOneUser(id))
  }

  return (
    <div>
      <MasterLayout>
        <Button className="mx-3" onClick={fetchUsersData}>
          fetch users{" "}
        </Button>
        <Button className="mx-3" onClick={(e) => fetchOneUserData(e, 4)}>
          fetch one user{" "}
        </Button>

        <ThemeToggler />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit
          voluptates facilis optio dolorum provident sunt laudantium aliquid,
          maxime dolores ratione eaque corporis vero, et totam, harum ad
          praesentium. Rem.
        </p>
        {/* <div className="flex flex-wrap w-full">{JSON.parse(session?.user)}</div> */}
      </MasterLayout>
    </div>
  )
}
