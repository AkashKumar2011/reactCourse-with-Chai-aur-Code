import { useState } from 'react';

function App() {
  return(
    <>
      <MyButton />
    </>
  )

}


function MyButton(){

  let [count, setCount] = useState(0);

  function handleIncrement(){
    setCount(count += 1);
    console.log(count);
  }
  
  function handleDecrement(){
    setCount(count -= 1)
  }

  return (
    <>
     <div className='container'>
      <h1> Like and Dislike Button</h1>
      <div className='btnDiv'>
        <button id='btnLike' onClick={handleIncrement}>👍</button>
        <span>{count}</span>
        <button id='btnDislike' onClick={handleDecrement}>👎</button>
      </div>
     </div>
    </> 
  )
}

export default App
