import { BsSend } from "react-icons/bs"

const messageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 text-black' placeholder='Send a message...'/>
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <BsSend />
        </button>
      </div>
    </form>
  )
}

export default messageInput
