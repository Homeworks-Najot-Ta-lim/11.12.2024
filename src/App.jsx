import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './store/CounterSlice'

function App() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className='w-[100vw] h-[100vh] grid place-items-center shadow'>
      <div className='grid place-items-center p-2 shadow'>
      <h1 className='text-6xl'>Count: {count}</h1>
      <div className="buttons flex justify-between items-center p-5 gap-5">
      <button onClick={()=>dispatch(increment())} className='border px-5 py-1 text-xl shadow-md'>+</button>
    <button onClick={()=>dispatch(reset())} className='border px-5 py-1 text-xl shadow-md'>reset</button>
    <button onClick={()=>dispatch(decrement())} className='border px-5 py-1 text-xl shadow-md'>-</button>
      </div>
      </div>
    </div>
  )
}

export default App
