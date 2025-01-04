import React, { useEffect, useState } from 'react'

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
    
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-gray-700 w-screen h-screen flex items-center justify-center'>
    <button
    className=''
    onClick={toggleDisplayMode}
    >
      {}
    </button>
      </div>
    </div>
  )
}

export default App