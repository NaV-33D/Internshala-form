import React from 'react'
import Input from '../components/Input'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative ">
      {/* Main container */}
      <div className="bg-white shadow-md border border-gray-200  rounded-md p-6 flex flex-col justify- min-h-[750px] h-[56px] relative w-[375px]">
  <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Signin to your<br />PopX account
        </h1>
        
        <p className="text-gray-500 text-md mb-8 ">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
        </p>

        <div className="space-y-5">
          <Input
            label="Email Address"
            placeholder="Enter email address"
            type="email"
          />
          
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
          />

          <div className="">
            <button
              type="button"
              className="w-full bg-[#CBCBCB] hover:bg-[#6C25FF] text-white py-3 rounded-md font-medium transition-colors text-base"              
              onClick={() => navigate("/account-settings")}

            >
              Login
            </button>
          </div>
        </div>

       </div>
    </div>
  )
}


export default Login
