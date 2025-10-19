import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="bg-white shadow-md border border-gray-200  rounded-md p-6 flex flex-col justify-between min-h-[750px] w-[375px] h-[56px]">
      
        {/* Text Section */}
        <div className="mt-auto text-left mb-5">
          <h2 className="font-semibold mb-2 text-[28px] text-[#1D2226] my-2">Welcome to PopX</h2>
          <p className="text-gray-500 text-sm mb-6 text-left text-[18px]">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate("/create-account")}
              className="w-full py-3 bg-[#6C25FF] text-white rounded-md font-medium hover:bg-[#4a1ce0] transition text-[16px]"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 bg-[#6C25FF4B] text-black rounded-md font-medium hover:bg-[#dccfff] transition"
            >
              Already Registered? Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
