import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        
        <h1 className='text-3xl font-semibold text-center text-green-500'>
          Login
          <span className='text-blue-500'> Chat-App</span>
          </h1>

          <form>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>User Name</span>
              </label>
              <input type="text" placeholder='User Name' className='w-full input input-boardered border-black h-10'/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder='Enter Password' className='w-full input input-boardered border-black h-10'/>
            </div>


            <div className="flex justify-between items-center mt-4">
              <Link to="/signup" className="text-sm text-blue-600 hover:underline" >
                {"Don't"} have an account?
              </Link>
            </div>

            <div className='mt-6'>
              <button type='submit' className='w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition'>Login</button>
            </div>
          </form>

      </div>
    </div>
  )
}

export default Login
