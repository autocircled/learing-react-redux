import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setCustom } from '../../redux/state/counter/counterSlice'
import { useRef } from 'react'

const Counter = () => {
    const myNumber = useRef()
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h5 className="card-title text-light">Counter App</h5>
            </div>
            <div className="card-body">
                <h5 className="number">{count}</h5>
                <div className="my-4">
                    <button className="btn btn-success" onClick={() => dispatch(increment())}>Increase</button>
                    <button className="btn btn-danger ms-2" onClick={() => dispatch(decrement())}>Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={myNumber} type="number" className="form-control" placeholder='Enter Custom Number' />
                    <button className="btn btn-success mt-2" onClick={() => dispatch(setCustom(parseInt(myNumber.current.value)))}>Add Custom</button>
                </div>
            </div>

        </div>
    )
}

export default Counter
