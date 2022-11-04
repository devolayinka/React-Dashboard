import React from 'react'

const Header = ({category,title}) => {
  return (
    <div className='mt-20 ml-5'>
      <p className='text-gray-400'>{category}</p>
      <p className='mb-6 text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header
