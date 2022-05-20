import { useRef } from 'react'

const useValueRef = (params) => {
  const paramsRef = useRef(null);
  paramsRef.current = params;
  return paramsRef;
}

export default useValueRef