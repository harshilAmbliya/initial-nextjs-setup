import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.org/users")
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 400 })
  }
}
