import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react';

function App() {

  // usestate hook
  const [length, setLength] = useState(4);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setsymbolAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null);

  // useCallback hook
  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (symbolAllowed) {
      str += '!@#$%&';
    }
    if (numberAllowed) {
      str += '0123456789';
    }
    let password = '';
    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  }, [length, numberAllowed, symbolAllowed, setPassword]);
  
  // copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 21); // For mobile devices
      window.navigator.clipboard.writeText(passwordRef.current.value);
    }
  }, [password]);   

  // useEffect hook
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolAllowed, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 mt-15 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center mb-5  text-3xl'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-7"> 
      <input
            type="text"
            value={password}
            className="outline-none w-full pb-1 px-3 bg-gray-600 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 hover:bg-blue-800 text-white px-3 pb-1.5 text-1xl shrink-0'
        >copy</button>
      </div>
      <div className='flex sm:flex-col md:flex-row  text-sm gap-x-3 mb-5'>
        <div className='flex items-center gap-x-1'>
          <input 
              type="range"
              min={6} max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
          />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                  setNumberAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              id="characterInput"
              onChange={() => {
                  setsymbolAllowed((prev) => !prev )
              }}
          />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App