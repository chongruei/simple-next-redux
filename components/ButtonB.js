import { useSelector } from 'react-redux'
import { countSelector } from '../feature/counterSelector'

import useCounter from '../hooks/useCounter'

const ButtonB = () => {
    const { count, handleAddCount } = useCounter(10)
    const globalCount = useSelector(countSelector)
    return (
        <div>
            <div>global count: {globalCount}</div>
            <button type="button" onClick={handleAddCount}>{count}</button>
        </div>
    )
}

export default ButtonB