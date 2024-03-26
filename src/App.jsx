
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  // create a state to hold/store values
  const[Priciple,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[Interest,setInterest]=useState(0)

  // conditionally render
  const[IsPriciple,setIsPrinciple]=useState(true)
  const[Israte,setIsRate]=useState(true)
  const[Isyear,setIsYear]=useState(true)

  const validate = (e)=>{
     const {name,value}= e.target
     console.log(name);
     console.log(value);
    //  regular expression

  //  console.log(!!value.match(/^[0-9]*$/));
   if(!!value.match(/^[0-9]*$/)){
    if(name=='Principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    
    }else if(name=='Rate'){
      setRate(value)
      setIsRate(true)
    }else{
      setYear(value)
      setIsYear(true)
    }

   }else{
      if(name=='Principle'){
        setIsPrinciple(false)
        setPrinciple(value)
      }
      else if(name=='Rate'){
        setIsRate(false)
        setRate(value)
      }else{
        setIsYear(false)
        setYear(value)
      }
   }

  }

  // function to reset
  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  // function to calculate SI
  const handleCalculate=()=>{
      setInterest((Priciple*rate*year)/100)
  }

  return (
    <>
     <div className='main'>
        <div className='sub p-5'>
          <h1>Simple Interest App</h1>
          <p>Calculate Your Simple Interest Easily</p>

          <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-5 shadow flex-column'>
            <h1>₹ {Interest}</h1>
             <p>Total Simple Interest</p>
          </div>


          <form action="" className='mt-5'>
          <TextField id="outlined-basic" name='Principle' value={Priciple ||""} label="₹ Priciple amount " variant="outlined"  className='w-100'onChange={(e)=>validate(e)}/>
         {!IsPriciple && <p className='text-danger'>Invalid Input</p>}
          <TextField id="outlined-basic" name='Rate' value={rate ||""} label="Rate of interst (p.a) %" variant="outlined"  className='w-100 mt-3' onChange={(e)=>validate(e)}/>
          {!Israte && <p className='text-danger'>Invalid Input</p>}
          <TextField id="outlined-basic" name='Year' value={year ||""} label="Year (Yr)" variant="outlined"  className='w-100 mt-3' onChange={(e)=>validate(e)}/>
          {!Isyear &&<p className='text-danger'>Invalid Input</p>}
          </form>
           
          <div className='d-flex mt-4'>
          <Button className='w-50 p-3 me-3' variant="contained" color='success' disabled={IsPriciple && Israte && Isyear?false:true} onClick={handleCalculate}>Calculate</Button>
          <Button className='w-50 p-3'  variant="outlined" color='primary' onClick={handleReset}>Reset</Button>
          </div>

        </div>
     </div>
    </> 
  )
}

export default App
