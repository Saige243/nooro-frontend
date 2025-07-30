"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { PlusCircle } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { createTodo } from "./../actions/todos"

const COLORS = [
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#A2845E",
]

export default function CreateTaskPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [selectedColor, setSelectedColor] = useState(COLORS[0])

  const handleAddTask = async () => {
    if (!title.trim()) return

    try {
      await createTodo({
        title: title.trim(),
        color: selectedColor,
        completed: false,
      })
      router.push("/")
    } catch (error) {
      console.error("Failed to create todo", error)
    }
  }

  return (
    <div className="min-h-screen bg-bg-gray text-white flex flex-col  items-center px-6 pt-20">
      <div className="w-full max-w-md">
        <button
          onClick={() => router.push("/")}
          className="w-fit hover:opacity-80 cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 mb-12" />
        </button>
      </div>

      <div className="w-full max-w-md">
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
        />

        <label className="block mb-2 text-nooro-blue font-semibold text-sm">
          Color
        </label>
        <div className="flex gap-3 mb-12">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? "border-white" : "border-transparent"
              } cursor-pointer`}
              style={{ backgroundColor: color }}
              type="button"
            />
          ))}
        </div>

        <button
          onClick={handleAddTask}
          disabled={!title.trim()}
          className="w-full bg-nooro-dark-blue hover:opacity-90 cursor-pointer text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-bold text-sm">Add Task</span>
          <PlusCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
