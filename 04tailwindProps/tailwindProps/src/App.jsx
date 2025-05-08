
function App() {
  
 let img = './assets/student.jpg';

  return (
    <>
      
      <div className="items-center justify-center m-auto mt-9 py-7  max-w-xs px-7 rounded-md shadow-md bg-black">
        <h5 className=" text-cyan-700 text-3xl pb-5">Hi tailwindcss</h5>
        <img
          src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl text-amber-100 font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    </>
  )
}

export default App
