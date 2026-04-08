"use client"
import { OrganizationSwitcher, SignOutButton, UserButton } from "@clerk/nextjs"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react"
export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <header>apps/web</header>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <div>{JSON.stringify(users)}</div>
      <Button onClick={() => addUser()}>Add User</Button>

      <SignOutButton />
    </div>
  )
}
