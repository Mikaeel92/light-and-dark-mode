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

  return (
    <div>App</div>
  )
}

export default App