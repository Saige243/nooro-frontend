"use client"
import React from "react"
import { Todo } from "../types"
import Image from "next/image"
import { deleteTodo } from "../actions/todos"
import { useRouter } from "next/navigation"

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const router = useRouter()

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id)
      router.refresh()
    } catch (error) {
      console.error("Error deleting todo:", error)
    }
  }
  return (
    <div className="flex items-center justify-between bg-[#262626] p-3 px-4 rounded-lg shadow-md mb-3">
      <div className="flex items-start flex-grow">
        <div
          className={`
            w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center flex-shrink-0
            ${
              todo.completed
                ? "bg-nooro-purple border-nooro-purple"
                : "border-nooro-blue"
            }
          `}
          // onClick={() => onToggleComplete(todo.id)}
        >
          {todo.completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <p
          className={`ml-4 text-gray-200 text-base break-words ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </p>
      </div>

      <button
        className="ml-4 rounded-md hover:opacity-90 transition-colors duration-200 flex-shrink-0 cursor-pointer"
        aria-label="Delete task"
        onClick={() => handleDelete(Number(todo.id))}
      >
        <Image
          src="/trash.svg"
          alt="Trash Icon"
          width={20}
          height={20}
          className="w-8 h-8 mx-auto mb-5"
        />
      </button>
    </div>
  )
}

export default TodoItem
