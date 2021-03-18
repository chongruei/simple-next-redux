import { useSelector } from 'react-redux'
import { countSelector } from '../feature/counterSelector'

import useCounter from '../hooks/useCounter'

const ButtonA = () => {
    const { count, handleAddCount } = useCounter(2)
    const globalCount = useSelector(countSelector)
    return (
        <div>
            <div>global count: {globalCount}</div>
            <button type="button" onClick={handleAddCount}>{count}</button>
        </div>
    )
}

export default ButtonA