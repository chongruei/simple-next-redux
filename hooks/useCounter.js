import { useState, useCallback } from "react"

const useCounter = (value = 0) => {
    const [count, setCount] = useState(value)

    const handleAddCount = useCallback(() => setCount(count => count += 1), [])

    return {
        count,
        handleAddCount
    }
}

export default useCounter
