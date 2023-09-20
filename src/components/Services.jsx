import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='my-2' id="services">
        <div className='flex justify-center items-center text-sky-500 font-semibold tracking-wider' id="services">
            SERVICES
        </div>

        <div className='flex justify-center items-center text-black/80 font-bold tracking-wider sm:text-6xl text-4xl'>

        What We Cover
        </div>
<div className='flex justify-center items-center mt-4 flex-col gap-1 '>
<hr className='bg-sky-600 h-[3px] w-44' />

<hr className='bg-sky-600 h-[3px] w-32 ' />

</div>
<ServicesCard/>
    </div>
  )
}

export default Services