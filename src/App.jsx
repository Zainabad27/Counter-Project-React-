import { useState } from 'react'
import './App.css'

// function App() {
//   // let counter = 5;
//   let [counter, setCounter] = useState(10);

//   const addvalue = () => {
//     if(counter===10){
//       setCounter(10);
//       return;
//     }
//     setCounter(counter + 1);
//   }

//   const subtractvalue = () => {
//     if (counter === 0) {
//       setCounter(0);
//       return;
//     }
//     setCounter(counter - 1);
//   }
//   const boostvalue = () => {
//     setCounter(counter + 10000);
//   }


//   return (
//     <>

//       <h1>First Project</h1>
//       <p>Current Counter Value: {counter}</p>
//       <button onClick={addvalue}>+1</button>
//       <button onClick={subtractvalue}>-1</button>
//       <button onClick={boostvalue}>Boost Value</button>
//     </>
//   )
// }

function App(){
  return(
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Testing Tailwind </h1>
    </>

  )
}

export default App
