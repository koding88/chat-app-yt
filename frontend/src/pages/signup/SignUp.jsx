import React from 'react'
import GenderCheckBox from './GenderCheckBox'
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">Chat app</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input w-full input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input w-full input-bordered h-10" />
          </div>

          <div>
            <label className="label">
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input w-full input-bordered h-10" />
          </div>

          <div>
            <label className="label">
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" className="input w-full input-bordered h-10" />
          </div>


          {/* Gender checkbox goes here */}
          <GenderCheckBox />

        </form>

        <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          {"Already have an account?"}
        </a>

        <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700">Login</button>
        </div>
      </div>

    </div>
  )
}

export default SignUp