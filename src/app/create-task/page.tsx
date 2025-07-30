"use client"

import React from "react"
import { useRouter } from "next/navigation"
import TaskForm from "../components/TodoForm"
import { createTodo } from "../actions/todos"

export default function CreateTaskPage() {
  const router = useRouter()

  const handleCreateSubmit = async (data: {
    title: string
    color: string
    completed?: boolean
  }) => {
    await createTodo(data)
  }

  const handleSuccess = () => {
    router.push("/")
    router.refresh()
  }

  const handleCancel = () => {
    router.push("/")
  }

  return (
    <TaskForm
      onSubmit={handleCreateSubmit}
      buttonText="Add Task"
      onSuccess={handleSuccess}
      onCancel={handleCancel}
      showBackButton={true}
    />
  )
}
