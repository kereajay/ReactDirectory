import React, { useState, useContext } from "react";
import { usercontext } from "./main";
import { toast } from "react-toastify";

function Newperson() {


    const { state, dispatch } = useContext(usercontext);
    const [displayform, setDisplayform] = useState(false);
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [aadhar, setAadhar] = useState("")
    const [mobile, setMobile] = useState('')
    const [age, setAge] = useState(null)


    const handlesave = () => {
        if (!name) {
            toast.warning("Name cannot be empty", {
                position: 'top-center',
                autoClose: 2000

            })
            return

        }
        if (!dob) {
            toast.warning("Date of Birth cannot be empty", {
                position: 'top-center',
                autoClose: 2000
            })
            return
        }
        if(!aadhar || aadhar.split("").length<12){
            toast.warning("Aadhar Number cannot be empty and should be 12 digits",{
                position:'top-center',
                autoClose:2000
            })
            return
        }
        if(!mobile || mobile.split("").length<10){
            toast.warning("Mobile Number cannot be empty and should be 10 digits",{
                position:'top-center',
                autoClose:2000
            })
            return
        }
        if (!age) {
            toast.warning("Age cannot be empty", {
                position: 'top-center',
                autoClose: 2000
            })
            return
        }
        dispatch({ type: 'add', payload: { Name: name, DateofBirth: dob, AadharNumber: aadhar, MobileAadharNumber: mobile, Age: age } })

        setDisplayform(false)
    }
    const handledelete = (adharnumber) => {
        dispatch({ type: 'remove', payload: adharnumber })

    }
    return (
        <div className="border-2 border-black mx-16 h-[500px]">
            <div className="border-b-2 border-r-2 border-black w-56">
                <h1 className="text-xl px-8 py-2">Add New Person</h1>
            </div>
            <br />

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 text-gray-800 bg-gray-100">
                                Name
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 text-gray-800 bg-gray-100">
                                Date of Birth
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 text-gray-800 bg-gray-100">
                                Aadhar Number
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 text-gray-800 bg-gray-100">
                                Mobile Number
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 text-gray-800 bg-gray-100">
                                Age
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 text-gray-800 bg-gray-100">
                                Actions
                            </th>
                        </tr>
                    </thead>


                    {
                        state.DataArray && state.DataArray.map((data) => {
                            return (


                                <tbody>

                                    <tr>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">{data.Name}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">{data.DateofBirth}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">{data.AadharNumber}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">{data.MobileAadharNumber}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">{data.Age}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
                                            {/* <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button> */}
                                            <button className="bg-red-500 text-white px-3 py-1 rounded ml-2" onClick={() => handledelete(data.AadharNumber)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )

                        })
                    }
                </table>
            </div>
            <br />

            {displayform === true && (
                <div className="bg-blue-400">
                    <div>
                        <h1 className="text-lg font-bold text-white text-center">Fill below form for New Entry</h1>
                    </div>

                    <div className="bg-blue-300 py-2 flex gap-2 px-8 items-center justify-center  ">
                        <input type="text" placeholder="name" required onChange={(e) => setName(e.target.value)} />
                        <input type="date" required onChange={(e) => setDob(e.target.value)} />
                        <input type="number" placeholder="aadhar number" required onChange={(e) => setAadhar(e.target.value)} />
                        <input type="number" placeholder="mobile number" required onChange={(e) => setMobile(e.target.value)} />
                        <input type="number" placeholder="age" required onChange={(e) => setAge(e.target.value)} />
                        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold  px-4 rounded" onClick={handlesave}>save</button>


                    </div>
                </div>
            )}

            <div className="flex justify-end px-8 mt-12">
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setDisplayform(true)}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Newperson;
