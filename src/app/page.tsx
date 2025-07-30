"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import CreateTaskItemButton from "./components/CreateTaskItemButton"
import TaskItem from "./components/TaskItem"
import { fetchTodos, updateTodo, deleteTodo } from "./actions/todos"
import { Todo } from "./types"

const sortTodos = (todos: Todo[]): Todo[] => {
  return [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return 0
    }
    return a.completed ? 1 : -1
  })
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const fetchedTodos: Todo[] = await fetchTodos()
      const sortedTodos = sortTodos(fetchedTodos)
      setTodos(sortedTodos)
    } catch (err) {
      console.error("Failed to fetch todos:", err)
      setError("Failed to load tasks. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleToggleComplete = async (id: string, completed: boolean) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
      return sortTodos(updatedTodos)
    })

    try {
      await updateTodo(Number(id), { completed: completed })
      setError(null)
    } catch (error) {
      console.error("Error toggling todo completion:", error)
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      )
      setError("Failed to update task. Please try again.")
    }
  }

  const handleDeleteTodo = async (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

    try {
      await deleteTodo(Number(id))
      setError(null)
    } catch (error) {
      console.error("Error deleting todo:", error)
      setError("Failed to delete task. Please try again.")
      loadTodos()
    }
  }

  const incompleteCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-bg-gray text-white relative">
      <div className="absolute w-full flex justify-center -mt-6 z-10">
        <div className="max-w-2xl w-full px-6 ">
          <CreateTaskItemButton />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-4 text-sm text-gray-400 mt-10">
          <div className="flex items-center gap-2">
            <span className="text-nooro-blue">Tasks</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
              {incompleteCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nooro-purple">Completed</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
              {completedCount} of {totalCount}
            </span>
          </div>
        </div>
        <hr className="border-[#333333]" />

        {loading && (
          <div className="text-center py-16 text-gray-400">
            Loading tasks...
          </div>
        )}
        {error && <div className="text-center py-16 text-red-500">{error}</div>}
        {!loading && !error && todos.length === 0 ? (
          <div className="text-center py-16">
            <Image
              src="/Clipboard.svg"
              alt="Clipboard Icon"
              width={56}
              height={56}
              className="w-16 h-16 mx-auto mb-5"
            />
            <p className="text-nooro-gray mb-2 font-bold pb-4 text-[16px]">
              You don&apos;t have any tasks registered yet.
            </p>
            <p className="text-nooro-gray text-sm text-[16px]">
              Create tasks and organize your to-do items.
            </p>
          </div>
        ) : (
          <ul className="mt-6">
            {todos.map((todo: Todo) => (
              <li key={todo.id} className="mb-2">
                <TaskItem
                  todo={todo}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDeleteTodo}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
