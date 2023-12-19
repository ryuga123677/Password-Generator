import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password,setpassword]=useState("")
  //useRef hook
  const passwordref=useRef(null)

  const passwordgenerator=useCallback(()=>{//usecallback optimise karta hai //cache me rakhta hai values ko

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*(){}~"
    for(let i=1; i<=length; i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)
    
  },[length,numberallowed,charallowed])
  const copytoclip=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{passwordgenerator()},[length,charallowed,numberallowed,passwordgenerator])//use effect-> agar inme kuch change ho too rerun karo aur bina callback ke bhi ban jaega sirf useffect se

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>password Generator</div>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password'
      ref={passwordref}/>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  onClick={copytoclip}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
        <label >Length:{length}</label>

      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberallowed}
        id='numberInput'
        onChange={()=>{setnumberallowed((prev)=>!prev)}}
        />
        <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charallowed}
        id='characterInput'
        onChange={()=>{setcharallowed((prev)=>!prev)}}
        />
        <label>Character</label>
      </div>
    </div>
    </>
  )
}

export default App
