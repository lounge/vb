import React, { useState } from 'react'

export { Counter }

interface CounterProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

const Counter = ({
  backgroundColor,
  ...props
}: CounterProps) => {
  const [count, setCount] = useState(0)
  return (
    <button type="button" style={{ backgroundColor }} onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  )
}