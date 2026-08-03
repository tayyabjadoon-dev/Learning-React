import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
   <>
   <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}></div>
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>
    <div className='bg-white flex flex-wrap gap-3 rounded-full p-3 shadow-lg'>
    <button onClick={() => setColor("red")} className='bg-red-500 text-white p-2 rounded-full '>Red</button>
    <button onClick={() => setColor("green")} className='bg-green-500 text-white p-2 rounded-full '>Green</button>
    <button onClick={() => setColor("blue")} className='bg-blue-500 text-white p-2 rounded-full '>Blue</button>
    <button onClick={() => setColor("yellow")} className='bg-yellow-500 text-white p-2 rounded-full '>Yellow</button>
    <button onClick={() => setColor("pink")} className='bg-pink-600 text-white p-2 rounded-full '>Pink</button>
    <button onClick={() => setColor("black")} className='bg-black text-white p-2 rounded-full '>Black</button>
    <button onClick={() => setColor("brown")} className='bg-amber-900 text-white p-2 rounded-full '>Brown</button>
    <button onClick={() => setColor("purple")} className='bg-purple-600 text-white p-2 rounded-full '>Purple</button>
    </div>
   </div>
   </>
  )
}

export default App
