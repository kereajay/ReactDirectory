import React, { createContext, useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Newperson from './Newperson.jsx'
import Information from './Information.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const usercontext = createContext()

const initialstate = {
  DataArray: [],
}
const reducerfn = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        DataArray: [...state.DataArray, action.payload]

      }
      break;
      case 'remove':
        return{
          ...state,
          DataArray:state.DataArray.filter((data)=>data.AadharNumber!==action.payload)
        }
    default:
      return state;


  }

}
const Maina = () => {
  const [state,dispatch]=useReducer(reducerfn,JSON.parse(localStorage.getItem('Information'))||initialstate)
  useEffect(()=>{
    localStorage.setItem('Information',JSON.stringify(state))
    
  },[state])
  return (


    <>
      <usercontext.Provider value={{ state, dispatch }} >
        <Navbar />
        <Outlet />
        <ToastContainer/>
      </usercontext.Provider>
    </>
  )

}

const routera = createBrowserRouter([
  {
    path: '/',
    element: <Maina />,
    children: [
      {
        path: '/',
        element: <Newperson />
      },
      {
        path: '/Newperson',
        element: <Newperson />
      },
      {
        path: '/information',
        element: <Information />

      }
    ]
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routera} />)



