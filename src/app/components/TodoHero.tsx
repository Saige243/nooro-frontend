import React from "react"
import Image from "next/image"

function TodoHero() {
  return (
    <div className="absolute flex items-center justify-center gap-2 mb-8 w-full h-[200px]  bg-hero-gray">
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
  )
}

export default TodoHero
