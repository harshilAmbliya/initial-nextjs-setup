import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: any } }
) => {
  //   const { searchParams } = new URL(req.url)
  //   const id = searchParams.get("id")
  const userId = parseInt(params.id)

  try {
    const { data } = await axios.get(`https://jsonplaceholder.org/users`)
    // console.log("data", data)
    const filterData =
      Array.isArray(data) && data.filter((item) => item.id === userId)
    return NextResponse.json({ user: filterData }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 400 })
  }
}
