'use client'

import React, { useEffect, useState } from 'react'

type CounterCardProps = {
  target: number
  title: string
}

const CounterCard: React.FC<CounterCardProps> = ({ target, title }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1000
    const incrementTime = 20
    const increment = Math.ceil(target / (duration / incrementTime))

    const counter = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(counter)
      }
      setCount(start)
    }, incrementTime)

    return () => clearInterval(counter)
  }, [target])

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="group text-xl font-medium text-blue-600">
        <div className="bg-gray-100 text-start p-6 rounded-3xl shadow group-hover:shadow-lg transition-shadow duration-500">
          <div className="text-6xl md:text-7xl font-serif text-blue-600 mb-2">{count}</div>
          <p className="text-lg font-medium">{title}</p>
          <div className="relative mt-2">
            <div className="h-0.5 bg-blue-600 w-20 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExperiencePage: React.FC = () => {
  const data = [
    { target: 3, title: 'Years of Experience' },
    { target: 6, title: 'Completed Projects' },
    { target: 20, title: 'Happy Clients' },
  ]

  return (
    <div className="py-12 px-8 md:px-16 bg-white">
     <div className="max-w-6xl container mx-auto ">
       <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {data.map((item, index) => (
          <CounterCard key={index} target={item.target} title={item.title} />
        ))}
      </div>
      <div className="border-t border-blue-400 mt-10 pt-4 mx-4"></div>
     </div>
    </div>
  )
}

export default ExperiencePage
