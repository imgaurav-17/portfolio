import React from 'react'

function Projects() {
  return (
    <div className='sm:px-24 px-4 pb-24' id='projects'>
      <span className='text-center'>
        <h1 className='text-4xl font-semibold'>Projects</h1>
        <p className='text-gray-500 font-semibold'>Work done by me</p>
      </span>
      <div className='flex gap-6 py-10 flex-col sm:flex-row justify-center items-center '>
        <div className='shadow rounded-lg w-[21rem] h-[13rem] p-4 flex flex-col justify-between'>
          <div className='text-4xl text-center flex-grow flex items-center justify-center'>Portfolio</div>
          <div className='flex justify-center'>
            <button className='bg-black text-white py-2 px-4 rounded'>Live</button>
          </div>
        </div>
        <div className='shadow rounded-lg w-[21rem] h-[13rem] p-4 flex flex-col justify-between'>
          <div className='text-4xl text-center flex-grow flex items-center justify-center'>Refer & earn bot</div>
          <div className='flex justify-center'>
            <button className='bg-black text-white py-2 px-4 rounded'>Check bot</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects