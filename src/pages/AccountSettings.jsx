import React from 'react'
import img from '../assets/profile.png'

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-[#F7F8F9] shadow-md border border-gray-200 rounded-md flex flex-col min-h-[750px] relative w-[375px]">
        <div className='bg-white w-full h-full p-5'>
          <h1 className="text-xl font- text-gray-900 ">
          Account Settings
        </h1>

        </div>
      <div className='p-6 '>
          {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={img}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div>
            <h2 className="text-base font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Lorem Ipsum Text */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      </div>
    </div>
  )
}

export default AccountSettings