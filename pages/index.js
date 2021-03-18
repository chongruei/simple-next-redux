import { useCallback } from 'react'
import { useDispatch } from "react-redux"

import { increment } from '../feature/counterSlice'
import ButtonB from '../components/ButtonB'
import ButtonA from '../components/ButtonA'

export default function Home() {
  const dispatch = useDispatch()

  const handleAddCnt = useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  return (
    <div>
      <button onClick={handleAddCnt}>click me to add global cnt</button>
      <ButtonA />
      <ButtonB />
    </div>
  )
}
