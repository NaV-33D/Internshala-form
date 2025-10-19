import React from "react";
import Input from "../components/Input"
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 relative pt-8">
  

      {/* Main form container */}
      <div className="bg-white shadow-md border border-gray-200  rounded-md p-6 flex flex-col justi min-h-[790px] w-[375px] h-[56px] relative">
  

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
          Create your <br /> PopX account
        </h2>

        {/* Form Fields */}
        <div className="space-y-6">
          <Input
            label="Full Name"
            placeholder="Marry Doe"
            type="text"
            required
          />

          <Input
            label="Phone number"
            placeholder="Marry Doe"
            type="tel"
            required
          />

          <Input
            label="Email address"
            placeholder="Marry Doe"
            type="email"
            required
          />

          <Input
            label="Password"
            placeholder="Marry Doe"
            type="password"
            required
          />

          <Input
            label="Company name"
            placeholder="Marry Doe"
            type="text"
          />

          {/* Radio group */}
         <div>
  <p className="block text-gray-900 text-sm mb-3 font-normal">
    Are you an Agency?<span className="text-red-600">*</span>
  </p>
  <div className="flex items-center gap-8">
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="agency"
        value="yes"
        defaultChecked
        className="w-4 h-4 accent-[#642AF5] cursor-pointer"
      />
      <span className="text-gray-900 text-sm">Yes</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="agency"
        value="no"
        className="w-4 h-4 accent-[#642AF5] cursor-pointer"
      />
      <span className="text-gray-900 text-sm">No</span>
    </label>
  </div>
</div>

          {/* Submit Button */}
          <div className="pt-20">
            <button
              type="button"
              className="w-full bg-[#642AF5] hover:bg-indigo-700 text-white py-3 rounded-md font-medium transition-colors text-sm"
              onClick={() => navigate("/account-settings")}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
