import React from 'react'

function App() {
  const [bgColor, setBgColor] = React.useState('white');

  return (
    <div className='w-full h-screen duraton-200'
    style={{ backgroundColor: bgColor }}>
    
      <div className='fixed top-12 left-0 inset-x-0 px-2 flex flex-wrap items-center justify-center'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('red')}>
            red
          </button>
          <button className='outline-none bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('green')}>
            green
          </button>
          <button className='outline-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('blue')}>
            blue
          </button>
          <button className='outline-none bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('orange')}>
            orange
          </button>
          <button className='outline-none bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('cyan')}>
            cyan
          </button>
          <button className='outline-none bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('yellow')}>
            yellow
          </button>
          <button className='outline-none bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('gray')}>
            gray
          </button>
          <button className='outline-none bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('purple')}>
            purple
          </button>
          <button className='outline-none bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-4 rounded-full'
            onClick={() => setBgColor('teal')}>
            teal
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default App