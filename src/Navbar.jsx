import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
  return (
    <div>
        <div className='bg-sky-300 py-4 text-center'>
            <h1 className='text-2xl font-bold text-white'>Geekster Directory app</h1>
        </div>

        <div className='py-6 px-16 flex gap-20'>
            <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate('/Newperson') }>Add New Person</button>
            <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate('/information') }>Retrieve information</button>


        </div>
      
    </div>
  )
}

export default Navbar
