import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countery'
import Counter2 from './Counter2'

function App() {
  // state change er jnnno destructuring way follow korte hobe
  // const {name, age} = ObjName;
  // const [firstElement, secondElement] = arrrayName

  // function getSomething(num){  ...this function is like state changing function
  //   function innerSomething(value){
  //     return num = value;
  //   }
  //   return [num, innerSomething]
  // }
  // const [count, setCount] = getSomething(5) .... its like const [count, setConunt] = useState(0)
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
      <small>the core concept 2 is(event in jsx, State change in react)</small>
      <br></br>
      <button onClick={handleclick}>Click me</button>
      <button onClick={handleclick2}>Click me too</button>
      {/* using a anonymous function on jsx */}
      <button onClick={()=>{console.log('third button clicked')}}>Third click</button>
      {/* using a function with parameters */}
      {/* <button onClick={handleclick3(8)}>click me 4</button> .. */}
      <button onClick={()=> handleclick3(10)}>click me 4</button>

      {/* using use State component which is named Counter.jsx */}
      <Counter></Counter>  
      <Counter2></Counter2>
    </>
  )
}

export default App
