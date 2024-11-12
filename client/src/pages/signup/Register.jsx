import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'

const Register = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })


  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        
        <h1 className='text-3xl font-semibold text-center text-green-500'>
          Sign Up
          <span className='text-blue-500'> Chat-App</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" placeholder='Enter Full Name' className='w-full input input-boardered border-black h-10' 
                value={inputs.fullName}
                onChange={ (e) => setInputs({ ...inputs, fullName: e.target.value }) }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>User Name</span>
              </label>
              <input type="text" placeholder='Enter User Name' className='w-full input input-boardered border-black h-10'
                value={inputs.userName}
                onChange={ (e) => setInputs({ ...inputs, userName: e.target.value }) }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder='Enter Password' className='w-full input input-boardered border-black h-10'
                value={inputs.password}
                onChange={ (e) => setInputs({ ...inputs, password: e.target.value }) }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input type="password" placeholder='Enter Confirm Password' className='w-full input input-boardered border-black h-10' 
                value={inputs.confirmPassword}
                onChange={ (e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>


            <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

            <div className="flex justify-between items-center mt-4">
              <Link to="/signin" className="text-sm text-blue-600 hover:underline" >
                Already have an account?
              </Link>
            </div>

            <div className='mt-6'>
              <button type='submit' className='w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition'>Sign up</button>
            </div>
          </form>

      </div>
    </div>
  )
}

export default Register
