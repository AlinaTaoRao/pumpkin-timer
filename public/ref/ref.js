/* way 3 */

import React, { useEffect, useState } from 'react'
import useInterval from './useInterval.ts'

const Timer = () => {
  const [count, setCount] = useState(10)
  const otherFn = () => {
    console.log('otherFn')
  }

  useInterval(() => {
    setCount(count - 1) // 每次渲染都会走这里，所以count值为最新
  }, count === 0 ? null : 1000)

  useEffect(() => {
    otherFn()
  }, [])

  return <div>{count}</div>
}

export default Timer
