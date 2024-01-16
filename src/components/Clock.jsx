import { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getDegree = (value, max) => (360 / max) * value;

  const secondHandStyle = {
    transform: `rotate(${getDegree(time.getSeconds(), 60)}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${getDegree(time.getMinutes(), 60)}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${getDegree(time.getHours() % 12, 12)}deg)`,
  };


  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-40 md:w-80 h-40 md:h-80 rounded-full bg-white shadow-md border-2 border-gray-800 relative flex justify-center items-center'>
        <div className=' h-[160px] md:h-[300px] w-[5px] flex flex-col justify-center items-center -translate-y-1 translate-x-1' style={secondHandStyle}>
          <div className=' rounded-full bg-red-600 h-full'>.</div>
          <div className=' bg-transparent h-full'></div>
        </div>
        <div className='h-[120px] md:h-[260px] w-[5px] flex flex-col justify-center items-center ' style={minuteHandStyle}>
          <div className=' rounded-full bg-gray-800 h-full'>.</div>
          <div className=' bg-transparent h-full'></div>
        </div>
        <div className='h-[100px] md:h-[200px] w-[5px] flex flex-col justify-center items-center -translate-x-1' style={hourHandStyle}>
          <div className=' rounded-full bg-gray-400  h-full'>.</div>
          <div className=' bg-transparent h-full'></div>
        </div>
        <div className='w-7 h-7 rounded-full bg-gray-300 absolute'>

        </div>
      </div>
    </div>
  )
}

export default Clock
