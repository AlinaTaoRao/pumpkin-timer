import { useEffect } from 'react'
import useValuesRef from './useValueRef'

const useInterval = (callback, delay) => {
  const savedCallback = useValuesRef(callback);
  // const savedCallbackMin= useValuesRef(() => Math.floor(savedCallback.current() % 60) );
  // const savedCallbackSec= useValuesRef(() =>savedCallback.current() % 60);


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