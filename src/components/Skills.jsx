import React from 'react'

export default function Skills() {
  return (
    <div className='sm:px-24 px-4 pb-24' id='skills'>
      <span className='text-center'>
        <h1 className='text-4xl font-semibold'>Skills</h1>
        <p className='text-gray-500 font-semibold'>What i know and i want to learn</p>
      </span>
      <div className='flex flex-col sm:flex-row items-center justify-center pt-10 gap-x-10'>

        <div className='shadow rounded-lg w-[21rem] h-[13rem] p-4 flex flex-col gap-10'>
          <span className='block text-center text-2xl'>Front-end development</span>
          <ul className='list-none flex flex-wrap'>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              HTML
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              CSS
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              JavaScript
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              ReactJS
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              TailwindCSS
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              Git/Github
            </li>
          </ul>

        </div>
        <div className='shadow rounded-lg w-[21rem] h-[13rem] p-4 flex flex-col gap-10'>
          <span className='block text-center text-2xl'>Back-end development</span>
          <ul className='list-none flex flex-wrap'>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              NodeJs
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              ExpressJs
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              MongoDB
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              Firebase
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              REST API
            </li>
            <li className='relative pl-8 w-1/2'>
              <img src='./assets/bx-code-alt.svg' className='absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6' alt='bullet' />
              GraphQL
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}