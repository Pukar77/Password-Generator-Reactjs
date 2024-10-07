
import './App.css'
import  { useCallback, useEffect, useState } from 'react'



function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgenerator = useCallback (()=>{

    let pass = "";
    let char;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number==true){
      str=str+"123456789";
    }
    if(specialChar==true){
      str=str+"@#$%^&*";
    }

    for(let i=0; i<length; i++){
     char = Math.floor( Math.random()*str.length);
     pass+= str.charAt(char);
    }

  

    setPassword(pass);




  },[length,number, specialChar, setPassword])


  useEffect(()=>{
    passwordgenerator();
  },[length, number, specialChar, passwordgenerator]);
 
  return (
    <>
    <h1 className='text-center text-8xl font-bold'>Password Generator</h1>

    <div className='w-[900px] m-auto bg-gray-300 my-5 text-center text-black font-bold text-5xl p-5' >
    
    <input type="text" placeholder='hi' className='border-3 border-solid border-black' value={password} readOnly  />

<input type='range' 
min={8} 
max={20} 
value={length}
 onChange={(e)=>{setLength(e.target.value)}}  ></input>
 <label htmlFor='range' className='text-sm ml-3' >Length: {length}</label>
<div className='flex my-4 gap-3'>
<input type='checkbox' 
onChange={()=>{
  setNumber((prev)=>!prev);}}></input>
<label htmlFor="checkbox" checked={number} className='text-sm' >Numbers</label>

<input type='checkbox' checked={specialChar} onChange={()=>{
  setSpecialChar((prev)=>!prev);}}></input>
<label htmlFor="checkbox" className='text-sm' >Special Charecters</label>
</div>
    </div>



   


    </>
  )
}


export default App
