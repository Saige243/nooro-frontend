import React from "react"
import Image from "next/image"
import { PlusCircle } from "lucide-react"

export default function TodoApp() {
  return (
    <div className="min-h-screen bg-bg-gray text-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="text-center mb-8 w-full ">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Image
              src="/rocket.svg"
              alt="Rocket Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <h1 className="text-2xl text-nooro-blue font-extrabold">
              Todo <span className="text-nooro-purple">App</span>
            </h1>
          </div>

          <button className="w-full bg-nooro-dark-blue hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <span className="font-bold text-sm">Create Task</span>
            <PlusCircle className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-between items-center mb-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-nooro-blue">Tasks</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
              0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nooro-purple">Completed</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
              0
            </span>
          </div>
        </div>
        <hr className="border-[#333333]" />

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
      </div>
    </div>
  )
}
