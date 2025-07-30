"use client"

import React from "react"
import { Todo } from "../types"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface TaskItemProps {
  todo: Todo
  onToggleComplete: (id: string, completed: boolean) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

const TaskItem: React.FC<TaskItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
}) => {
  const router = useRouter()

  const handleToggleClick = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await onToggleComplete(todo.id, !todo.completed)
  }

  const handleDeleteClick = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await onDelete(todo.id)
  }

  const handleItemClick = () => {
    router.push(`/edit-todo/${todo.id}`)
  }

  return (
    <div
      className="flex items-center justify-between bg-[#262626] p-3 px-4 rounded-lg shadow-md mb-3 cursor-pointer" // Add cursor-pointer
      onClick={handleItemClick}
    >
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
        <p
          className={`ml-4 text-gray-200 text-base break-words ${
            todo.completed ? "line-through text-gray-500" : ""
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

export default TaskItem
