"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import TodoForm from "../../components/TodoForm"
import { fetchTodoById, updateTodo } from "../../actions/todos"
import { Todo } from "../../types"

interface EditTaskPageProps {
  params: Promise<{
    id: string
  }>
}

const EditTaskPage: React.FC<EditTaskPageProps> = ({ params }) => {
  const { id } = React.use(params)
  const router = useRouter()

  const [todo, setTodo] = useState<Todo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTodo = async () => {
      setLoading(true)
      setError(null)
      try {
        const fetchedTodo = await fetchTodoById(Number(id))
        setTodo(fetchedTodo)
      } catch (err) {
        console.error("Failed to fetch todo for editing:", err)
        setError("Failed to load task for editing.")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadTodo()
    }
  }, [id])

  const handleUpdateSubmit = async (
    data: { title: string; color: string; completed?: boolean },
    todoId?: string
  ) => {
    if (!todoId) {
      throw new Error("Todo ID is required for updating.")
    }
    await updateTodo(Number(todoId), data)
  }

  const handleSuccess = () => {
    router.push("/")
    router.refresh()
  }

  const handleCancel = () => {
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-gray text-white flex items-center justify-center">
        Loading task...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg-gray text-white flex items-center justify-center">
        {error}
      </div>
    )
  }

  if (!todo) {
    return (
      <div className="min-h-screen bg-bg-gray text-white flex items-center justify-center">
        Task not found.
      </div>
    )
  }

  return (
    <TodoForm
      initialData={todo}
      onSubmit={handleUpdateSubmit}
      buttonText="Save Changes"
      onSuccess={handleSuccess}
      onCancel={handleCancel}
      showBackButton={true}
    />
  )
}

export default EditTaskPage
