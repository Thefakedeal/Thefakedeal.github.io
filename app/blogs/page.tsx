import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <main className="w-screen flex flex-col items-center">
        <section className="glass w-full md:w-3/4 p-4 mb-5 flex flex-col gap-2 min-h-[80vh]">
            <h1>
                Blogs
            </h1>
        </section>
    </main>
  )
}