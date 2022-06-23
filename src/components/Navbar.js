import React from 'react'

export const Navbar = ({setKeyword}) => {
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }
  return (
    <div className='navbar'>
      <span>My Shop  </span>
      <input type="text" onChange={handleChange} placeholder= "Search" />
    </div>
  )
}
