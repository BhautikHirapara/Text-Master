import React, { useState } from 'react'
import './All.css'
import { useSpeechSynthesis } from 'react-speech-kit';

const Textform = () => {
  let {speak} = useSpeechSynthesis();

    const [text, setText] = useState('')

    const HandleUpClick = () => {
      setText(text.toUpperCase())
    }

    const HandleLoClick = () => {
      setText(text.toLowerCase())
    }
    
    const HandleFU = () => {
      let newText = text.split(' ')
      for (let index = 0; index < newText.length; index++) {
        newText[index] = newText[index].charAt(0).toUpperCase() + newText[index].slice(1);
      }
      let arr = newText.join(' ')
      setText(arr)
    }

    const HandleUL = () => {
      let newText = ""
      for (let index = 0; index < text.length; index++) {
        if(index%2==0)
        {
          newText += text[index].toUpperCase();
        }
        else
        {
          newText += text[index].toLowerCase();
        }
      }
      setText(newText)
    }

    const HandleRemSpac = () => {
        setText(text.replace(/\s+/g,' ').trim())
    }

    const HandleSpeek = () => {
        speak({text:text})
    }

    const HandleClear = () => {
      setText('')
    }

    const HandleCopy = () => {
        let newText = document.getElementById('myText');
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    const onChange = (e) => {
        setText(e.target.value)
    }

  return (
    <div style={{'margin':'50px 100px'}}>
      <textarea name="" id="myText" cols="170" rows="15" style={{'display':'block','margin':'auto'}} value={text} onChange={onChange}></textarea>
      <button onClick={HandleUpClick}>Convert To UpperCase</button>
      <button onClick={HandleLoClick}>Convert To LowerCase</button>
      <button onClick={HandleFU}>Capitalize First letter</button>
      <button onClick={HandleUL}>Alternet Capital Small Text</button>
      <button onClick={HandleRemSpac}>Remove Extra Space</button>
      <button onClick={HandleSpeek}>Speak Text</button>
      <button onClick={HandleClear}>Clear Text</button>
      <button onClick={HandleCopy}>Copy Text</button>
    </div>
  )
}

export default Textform