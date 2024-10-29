import { useState } from "react"

export default function Counter() {
 //variable,function
  let [count, setCount] = useState(0)
  let intCount = () => {
    setCount(++count)
    console.log(count)
  }
  return (
    <div>
      <button onClick={intCount}>Count = { count}</button>
    </div>
  )
}
//Hooks allow us to use state without writing class