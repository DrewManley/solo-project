import React from 'react'

const ClearButton = ({ clear }) => {
  return (
    <button className='btn' onClick={ clear }>Clear</button>
  )
}

export default ClearButton