import React, { useState } from 'react'
import './All.css'
const Navbar = () => {

    const [mode, setMode] = useState('light')
    const toggleMode = () => {
        if(mode === 'light')
        {
            setMode('dark')
            document.body.style.backgroundColor = '#181818'
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = '#B3B3B3' 
        }
    }
  return (
    <>
        <div className="navbar">
            <ul style={{backgroundColor : mode==='light'?'#a3deed':'#121212', color : mode==='light'?'black':'white'}}>
                <li>Spartan</li>
                <li>TEXT-GAME</li>
                <li id='mode' onClick={toggleMode}> Change The Theme - {mode==='light'?'dark':'light'}</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar