"use client"
import { api } from "@workspace/backend/_generated/api"
import { useQuery } from "convex/react"
export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <>
      <header>apps/widget</header>
      <div>{JSON.stringify(users)}</div>
    </>
  )
}
