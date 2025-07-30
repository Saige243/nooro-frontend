"use client"
import React from "react"
import { PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"

function CreateTaskItemButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push("/create-task")}
      className="w-full bg-nooro-dark-blue hover:opacity-90 cursor-pointer text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      <span className="font-bold text-sm">Create Task</span>
      <PlusCircle className="w-4 h-4" />
    </button>
  )
}

export default CreateTaskItemButton
