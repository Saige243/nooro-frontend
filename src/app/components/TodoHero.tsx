import React from "react"
import Image from "next/image"
import Link from "next/link"

function TodoHero() {
  return (
    <div className="absolute flex items-center justify-center gap-2 w-full h-[200px]  bg-hero-gray">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/rocket.svg"
            alt="Rocket Icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <h1 className="text-3xl text-nooro-blue font-extrabold">
            Todo <span className="text-nooro-purple">App</span>
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default TodoHero
