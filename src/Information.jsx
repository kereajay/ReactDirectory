import React,{useState,useContext} from 'react'
import {usercontext} from './main'
import {toast} from 'react-toastify'

function Information() {
    const {state,dispatch}=useContext(usercontext)
    const [inputadhar, setInputadhar] = useState('')
    const [displayarray, setDisplayarray] = useState([])
    const handlefind=()=>{
        if(!inputadhar || inputadhar.split("").length<12){
            toast.warning("Input cannot be empty and should be 12 digits",{
                position:'top-center',
                autoClose:2000
            })
            return
        }
        const updateddata=state.DataArray.filter((data)=>data.AadharNumber===inputadhar)
        console.log(updateddata)
        setDisplayarray(updateddata)
    }
  return (
    <div className='border-2 border-black mx-16 h-[500px]'>

        <div className='border-b-2 border-r-2 border-black w-64'>
            <h1 className='text-xl px-8 py-2'>Retrieve information</h1>
        </div>

             <br />
             <br />
        <div className='px-8 '>
            <input type="text"  className='border-2 border-black w-[30%] py-1' onChange={(e)=>setInputadhar(e.target.value)} />
            <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2' onClick={handlefind}>Find</button>
        </div>
        <br />
        

        {
            displayarray.length===0?<h1 className='text-2xl font-bold px-8'>No data found</h1>: displayarray.map((data)=>{
                return(
                    <>
                    <div className='px-2 py-2 border-2 w-[30%] mx-8 border-black'>
                        <h1>Name : {data.Name}</h1>
                        <h1>Date of Birth : {data.DateofBirth}</h1>
                        <h1>Aadhar Number : {data.AadharNumber}</h1>
                        <h1>Mobile Number : {data.MobileAadharNumber}</h1>
                        <h1>Age : {data.Age}</h1>
                    </div>
                    </>
                )
            })
        }
      
    </div>
  )
}

export default Information
