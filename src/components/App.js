
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
          <thead>
            <tbody>
          <tr>
            <th>Apple</th>
            {apple? <td style={{color:'rgb(0, 128, 0)'}} ref={appleRef}>20</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={appleRef}>20</td>}
          </tr>
          <tr>
            <th>Banana</th>
            {banana? <td style={{color:'rgb(0, 128, 0)'}} ref={bananaRef}>10</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={bananaRef}>10</td>}
          </tr>
          <tr>
            <th>Neutella</th>
            {neutella? <td style={{color:'rgb(0, 128, 0)'}} ref={neutellaRef}>30</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={neutellaRef}>30</td>}
          </tr>
          <tr>
            <th>Razor</th>
            {razor? <td style={{color:'rgb(0, 128, 0)'}} ref={razorRef}>5</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={razorRef}>5</td>}
          </tr>
          <tr>
            <th>CornFlakes</th>
            {corn? <td style={{color:'rgb(0, 128, 0)'}} ref={cornFlakesRef}>15</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={cornFlakesRef}>15</td>}
          </tr>
          <tr>
            <th>Sound Bar</th>
            {sound? <td style={{color:'rgb(0, 128, 0)'}} ref={soundBarRef}>50</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={soundBarRef}>50</td>}
          </tr>
          <tr>
            <th>Iphone</th>
            {iphone? <td style={{color:'rgb(0, 128, 0)'}} ref={iphoneRef}>80</td> : <td style={{color:'rgb(255, 0, 0)'}} ref={iphoneRef}>80</td>}
          </tr>
          </tbody>
          </thead>
        </table>
    </div>
  )
}

export default App
