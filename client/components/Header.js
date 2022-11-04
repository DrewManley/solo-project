import React from 'react'
import ClearButton from './ClearButton'

const Header = () => {
// clear form button
const clearForm = () => {
  window.location.href='https://www.youtube.com/watch?v=yKQ_sQKBASM';
}

  return (
    <header className='header'>
      <h1>Recipe Grabber</h1>
      <ClearButton clear={clearForm}/>
    </header>
  )
}

export default Header