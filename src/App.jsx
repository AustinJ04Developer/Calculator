import './App.css'
import Display from './components/Display.jsx'
import Keypad from './components/Keypad.jsx'
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('');
  
  return (
    <>
      <h1>Calculator</h1>
      <div className='design'>
        <Display value={display}/><br />
        <Keypad display={display} setDisplay={setDisplay}/>
      </div>
    </>
  )
}

export default App