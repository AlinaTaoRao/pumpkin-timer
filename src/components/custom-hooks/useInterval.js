import { useEffect } from 'react'
import useValuesRef from './useValueRef'

const useInterval = (callback, delay) => {
  const savedCallback = useValuesRef(callback);

  useEffect(() => {
    if (delay !== null) {
      const timer = setInterval(() => {
        savedCallback.current();
      }, delay)
      
      return () => clearInterval(timer) // delay改变时，旧的timer会被清除
      
    }
  }, [delay])
}

export default useInterval