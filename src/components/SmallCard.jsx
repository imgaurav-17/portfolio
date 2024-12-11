import React from 'react'

function SmallCard({ icon, title, subtitle }) {
  return (
    <div className='w-24 h-20 sm:w-32 sm:h-24 shadow rounded-md flex items-center justify-center flex-col hover:scale-110 transition duration-300'>
      <box-icon size='sm' name={icon}></box-icon><p>{title}</p><p className='text-gray-500 text-sm'>{subtitle}</p>
    </div>
  )
}

export default SmallCard