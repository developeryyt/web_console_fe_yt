import './App.css'
import {useState} from "react";

const App= () => {

  const [state, setState] = useState(0);


  return (
    <>
      <p>{state}</p>
      <button type='button' onClick={() => setState(prev => prev + 1)}>더하기</button>
    </>
  )
}

export default App
