import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  function handleclick(){
   console.log('Button clicked')
  }
  const handleclick2 = ()=> console.log('Button2 clicked');
  const handleclick3=(num1)=>{
    alert(num1 + 5)
  }
  return (
    <>
      <h3>React core concepts 02</h3>
      <p>Differente way to Handle event in React</p>
      <button onClick={handleclick}>Click me</button>
      <button onClick={handleclick2}>Click me too</button>
      {/* using a anonymous function on jsx */}
      <button onClick={()=>{console.log('third button clicked')}}>Third click</button>
      {/* using a function with parameters */}
      {/* <button onClick={handleclick3(8)}>click me 4</button> .. */}
      <button onClick={()=> handleclick3(10)}>click me 4</button>
     
    </>
  )
}

export default App
