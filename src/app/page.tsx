import React from "react"
import Image from "next/image"
import CreateTaskButton from "./components/CreateTaskButton"
import { fetchTodos } from "./actions/todos"
import { Todo } from "./types"
import TodoItem from "./components/TodoItem"

export default async function TodoApp() {
  const todos = await fetchTodos()
  console.log("Fetched todos:", todos)

  const incompleteCount = todos.filter(
    (t: { completed: boolean }) => !t.completed
  ).length
  const completedCount = todos.filter(
    (t: { completed: boolean }) => t.completed
  ).length

  return (
    <div className="min-h-screen bg-bg-gray text-white relative">
      <div className="absolute w-full flex justify-center -mt-6 z-10">
        <div className="max-w-2xl w-full px-6 ">
          <CreateTaskButton />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 mt-8">
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
              {completedCount}
            </span>
          </div>
        </div>
        <hr className="border-[#333333]" />

        {todos.length === 0 ? (
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
          <ul className="pt-4">
            {todos.map((todo: Todo) => (
              <li key={todo.id} className="mb-2">
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
