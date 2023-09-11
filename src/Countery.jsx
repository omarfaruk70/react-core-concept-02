import { useState } from "react"

export default function Counter(){
    // const [previous value, have to updated value] = useState(initial value);
    const [count, setCount] = useState(0);
    console.log(count, setCount);
    const handleAdd=()=>{
      let newCount = count + 1;
      setCount(newCount);
    };
    const handleReduce=()=>{
        let newReduce = count - 1;
        setCount(newReduce)
    }
    return (
        <div style={{border: '5px solid purple', padding: '10px', borderRadius: '15px'}}>
            <h3>exploring State</h3>
            <h2>Counte: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}

// // how to change a state
// 1. create a function with return .
// 2. creat a function with handle event and create an inner function to update state and return main function value and fully return innerFunction.
// 3. add event listener in onclick in jsx
// 4. export or import this main function. 
// as like .......

// import { useState } from "react";
// function useState(num){
    // const [count, setCount] = useState(0) here(useState) contain single parameter.
    //const [count, setCount] = useState(0) // here initial value is 0
    // // its return first element and secondly its return a function
    // const [count, setCount] = useState(5) // here initial value is 5
//export default  function updatedState(value){
//         num = value;
//     }
//  return [num, updatedState];
// }
//