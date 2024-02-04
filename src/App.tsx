
import { decrement, decrementByValue, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


function App() {
  const dispatch =useAppDispatch();
  const {count} = useAppSelector((state)=>state.counter)

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
       <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
          <button onClick={()=>dispatch(incrementByValue(5))} className="px-3 py-2 mx-4 rounded-md bg-green-500 text-xl font-semibold text-white">IncrementBy 5</button>
          <button onClick={()=>dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">Increment</button>
          <h1 className="text-5xl mx-10">{count}</h1>
          <button onClick={()=>dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">Decrement</button>
          <button onClick={()=>dispatch(decrementByValue(5))} className="px-3 mx-4 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">DecrementBy 5</button>
       </div>
      </div>
    </>
  )
}

export default App
