"use client"

import React, { useState, useEffect } from "react"
import { PlusCircle, ArrowLeft } from "lucide-react"
import { Todo } from "../types"
import { TODO_COLORS } from "../consts"

interface TaskFormProps {
  initialData?: Todo
  onSubmit: (
    data: { title: string; color: string; completed?: boolean },
    id?: string
  ) => Promise<void>
  buttonText: React.ReactNode
  onSuccess?: () => void
  onCancel?: () => void
  showBackButton?: boolean
}

const TaskItemForm: React.FC<TaskFormProps> = ({
  initialData,
  onSubmit,
  buttonText,
  onSuccess,
  onCancel,
  showBackButton = true,
}) => {
  const [title, setTitle] = useState(initialData?.title || "")
  const [selectedColor, setSelectedColor] = useState(
    initialData?.color || TODO_COLORS[0]
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setTitle(initialData?.title || "")
    setSelectedColor(initialData?.color || TODO_COLORS[0])
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      setError("Task title cannot be empty.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const dataToSubmit = {
        title: title.trim(),
        color: selectedColor,
        completed: initialData?.completed || false,
      }

      await onSubmit(dataToSubmit, initialData?.id)

      if (!initialData) {
        setTitle("")
        setSelectedColor(TODO_COLORS[0])
      }

      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      console.error("Form submission failed:", err)
      setError("Failed to save task. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg-gray text-white flex flex-col items-center px-6 pt-20">
      <div className="w-full max-w-md">
        {showBackButton && onCancel && (
          <button
            onClick={onCancel}
            className="w-fit hover:opacity-80 cursor-pointer"
            aria-label="Go back"
            type="button"
          >
            <ArrowLeft className="w-4 h-4 mb-12" />
          </button>
        )}
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="title"
            className="block mb-2 text-nooro-blue font-semibold text-sm"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="E.g. Brush your teeth"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-none w-full mb-8 rounded-lg border border-gray-700 bg-nooro-input-gray px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-nooro-blue"
            disabled={isSubmitting}
          />

          <label className="block mb-2 text-nooro-blue font-semibold text-sm">
            Color
          </label>
          <div className="flex gap-3 mb-12">
            {TODO_COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select color ${color}`}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-white"
                    : "border-transparent"
                } cursor-pointer`}
                style={{ backgroundColor: color }}
                type="button"
                disabled={isSubmitting}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            disabled={!title.trim() || isSubmitting}
            className="w-full bg-nooro-dark-blue hover:opacity-90 cursor-pointer text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                <span className="font-bold text-sm">{buttonText}</span>
                {!initialData && <PlusCircle className="w-4 h-4" />}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default TaskItemForm
