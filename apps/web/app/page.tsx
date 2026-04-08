"use client"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react"
export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <>
      <Authenticated>
        <header>apps/web</header>
        <div>{JSON.stringify(users)}</div>
        <Button onClick={() => addUser()}>Add User</Button>
      </Authenticated>
      <Unauthenticated>Hello</Unauthenticated>
    </>
  )
}
