import GenderCheckbox from './GenderCheckbox'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        
        <h1 className='text-3xl font-semibold text-center text-green-500'>
          Sign Up
          <span className='text-blue-500'> Chat-App</span>
          </h1>

          <form>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" placeholder='Pavan Kumar' className='w-full input input-boardered border-black h-10'/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>User Name</span>
              </label>
              <input type="text" placeholder='Pavan Kumar' className='w-full input input-boardered border-black h-10'/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder='Enter Password' className='w-full input input-boardered border-black h-10'/>
            </div>

            <GenderCheckbox />

            <div className="flex justify-between items-center mt-4">
              <a className="text-sm text-blue-600 hover:underline" href="#" >
                Already have an account?
              </a>
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
