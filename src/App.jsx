import { useState } from "react"
import Chessboard from "./components/Chessboard"
import Clock from "./components/Clock"

function App() {

  const [currentTab, setCurrentTab] = useState('chess');

  return (
    <div className='w-full h-screen relatve'>

      <div className="w-full fixed top-0 flex justify-center md:justify-start items-center px-10 lg:px-[100px] py-[40px] gap-10">
        <button onClick={() => setCurrentTab('chess')} className="px-8 py-1 rounded-[4px] bg-blue-300 shadow-md active:scale-95 transition-all duration-200 ease-in-out">Chesboard</button>
        <button onClick={() => setCurrentTab('clock')} className="px-8 py-1 rounded-[4px] bg-blue-300 shadow-md active:scale-95 transition-all duration-200 ease-in-out">Clock</button>
      </div>

      { currentTab === 'chess' ? ( <Chessboard /> ) : ( <Clock /> ) }
    </div>
  )
}

export default App
