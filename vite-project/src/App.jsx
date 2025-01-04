import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const App = () => {

const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  let saveMode = localStorage.getItem('displayMode')
  if(!saveMode) {
    saveMode = 'light'
    setDarkMode(false)
    localStorage.setItem('displayMode', saveMode)
  }
  setDarkMode(saveMode === 'dark' ? true : false)
}, [])

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-gray-700 w-screen h-screen flex items-center justify-center'>
    <button
    className='bg-yellow-400 dark:bg-yellow-300 rounded-md p-2'
    onClick={toggleDisplayMode}>
      {darkMode 
      ? <div className='flex items-center justify-center'><span className='mr-2'>Set To Light</span><FaSun/></div>
      : <div className='flex items-center justify-center'><span className='mr-2'>Set To Dark</span><FaMoon/></div>}
    </button>
      </div>
    </div>
  )
}

export default App