import Messages from "./Messages"
import MessageInput from "./messageInput"
import { TiMessages } from "react-icons/ti"

const MessageContainer = () => {

  const noChatSelected = true;
  
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      { noChatSelected 
        ? <NoChatSelected /> 
        : (
          <>
            <div className='bg-slate-400 px-4 py-2 mb-2'>
              <span className='font-bold label-text'>To:</span>
              <span className="text-green-800 font-bold px-2">Pavan Kumar</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )
      }
       
    </div>
  )
}

export default MessageContainer



const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-900 font-semibold flext flex-col items-center gap-2">
        <p>Welcome 👋 Pavan Kumar ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}