"use client"

import React from "react"
import { Todo } from "../types"
import Image from "next/image"
interface TodoItemProps {
  todo: Todo
  onToggleComplete: (id: string, completed: boolean) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
}) => {
  const handleToggleClick = async () => {
    await onToggleComplete(todo.id, !todo.completed)
  }

  const handleDeleteClick = async () => {
    await onDelete(todo.id)
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
          onClick={handleToggleClick}
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
        {/* Todo Title */}
        <p
          className={`ml-4 text-gray-200 text-base break-words ${
            todo.completed ? "line-through text-gray-500" : "" // Strikethrough for completed tasks
          }`}
        >
          {todo.title}
        </p>
      </div>

      <button
        className="ml-4 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 flex-shrink-0"
        aria-label="Delete task"
        onClick={handleDeleteClick}
      >
        <Image
          src="/trash.svg"
          alt="Trash Icon"
          width={20}
          height={20}
          className="w-6 h-6"
        />
      </button>
    </div>
  )
}

export default TodoItem
