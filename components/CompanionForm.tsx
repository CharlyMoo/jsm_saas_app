"use client"

import {maxLength, minLength, z} from "zod"

const formSchema = z.object({
    username: z.string().min(2).max(30),
})

const CompanionForm = () => {
  return (
    <div>Companion Form</div>
  )
}

export default CompanionForm