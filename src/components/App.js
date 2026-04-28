
import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = () => {

  let [apple, setApple] = useState(false)
  let [banana, setBanana] = useState(false)
  let [neutella, setNeutella] = useState(false)
  let [razor, setRazor] = useState(false)
  let [corn, setCorn] = useState(false)
  let [sound, setSound] = useState(false)
  let [iphone, setIphone] = useState(false)

  let appleRef = useRef()
  let bananaRef = useRef()
  let neutellaRef = useRef()
  let razorRef = useRef()
  let cornFlakesRef = useRef()
  let soundBarRef = useRef()
  let iphoneRef = useRef()

  function handleChange(e){
    let x = e.target.value
    console.log(x)
    if(+x  === ''){
      console.log('hello')
      setApple(false)
      setBanana(false)
    }

    if(+x <= +appleRef.current.innerText){
      setApple(true)
    }else{
      setApple(false)
    }
    

    if(+x <= +bananaRef.current.innerText){
      setBanana(true)
    }else{
      setBanana(false)
    }


    if(+x <= +neutellaRef.current.innerText){
      setNeutella(true)
    }else{
      setNeutella(false)
    }


    if(+x <= +razorRef.current.innerText){
      setRazor(true)
    }else{
      setRazor(false)
    }


    if(+x <= +cornFlakesRef.current.innerText){
      setCorn(true)
    }else{
      setCorn(false)
    }


    if(+x <= +soundBarRef.current.innerText){
      setSound(true)
    }else{
      setSound(false)
    }


    if(+x <= +iphoneRef.current.innerText){
      setIphone(true)
    }else{
      setIphone(false)
    }
  }

  return (
    <div>
        <h2>Enter your budget to check available items:</h2>
        <input onChange={handleChange} type="number"/>
        <h2>Items you can buy are in Green color</h2>
        <table>
          <tr>
            <td>Apple</td>
            {apple? <td style={{color:'green'}} ref={appleRef}>20</td> : <td style={{color:'red'}} ref={appleRef}>20</td>}
          </tr>
          <tr>
            <td>Banana</td>
            {banana? <td style={{color:'green'}} ref={bananaRef}>10</td> : <td style={{color:'red'}} ref={bananaRef}>10</td>}
          </tr>
          <tr>
            <td>Neutella</td>
            {neutella? <td style={{color:'green'}} ref={neutellaRef}>30</td> : <td style={{color:'red'}} ref={neutellaRef}>30</td>}
          </tr>
          <tr>
            <td>Razor</td>
            {razor? <td style={{color:'green'}} ref={razorRef}>5</td> : <td style={{color:'red'}} ref={razorRef}>5</td>}
          </tr>
          <tr>
            <td>CornFlakes</td>
            {corn? <td style={{color:'green'}} ref={cornFlakesRef}>15</td> : <td style={{color:'red'}} ref={cornFlakesRef}>15</td>}
          </tr>
          <tr>
            <td>Sound Bar</td>
            {sound? <td style={{color:'green'}} ref={soundBarRef}>50</td> : <td style={{color:'red'}} ref={soundBarRef}>50</td>}
          </tr>
          <tr>
            <td>Iphone</td>
            {iphone? <td style={{color:'green'}} ref={iphoneRef}>80</td> : <td style={{color:'red'}} ref={iphoneRef}>80</td>}
          </tr>
        </table>
    </div>
  )
}

export default App
