import React from 'react'

const ServicesCard = () => {
    const cards = [
        {
            img:"https://hashuudev-solar-site.netlify.app/img/product-3.jpg",
            title:"Commercial Solar Solutions",
            description:"Commercial solar solutions refer to the use of solar energy systems for businesses and commercial establishments. These solutions typically involve the installation of solar panels on rooftops, parking structures, or open land to harness the sun's energy and convert it into electricity. The generated solar power can be used to meet a portion or all of a company's electricity needs, reducing reliance on traditional fossil fuels and lowering energy costs in the long run."
        },
        {
            img:"https://hashuudev-solar-site.netlify.app/img/product-1.jpg",
            title:"Residential Solar Solutions",
            description:"Residential solar solutions refer to the use of solar energy systems to power homes and residential buildings. These systems harness the sun's energy through photovoltaic (PV) panels or solar thermal collectors and convert it into electricity or heat for various household purposes. The adoption of residential solar solutions has been growing rapidly in recent years due to increasing awareness of environmental issues and the desire to reduce dependency on fossil fuels."
        },
        {
            img:"https://hashuudev-solar-site.netlify.app/img/products-agriculture.jpg",
            title:"Agricultural Solar Solutions",
            description:"Agricultural solar solutions refer to the use of solar energy technologies in the agricultural sector. Solar energy is harnessed from the sun's rays and converted into electricity or thermal energy that can power various agricultural operations and processes. This approach offers numerous benefits to farmers and the agricultural industry as a whole, including cost savings, environmental sustainability, and energy independence."
        }
    ]
  return (
    <>
    <div className=' lg:grid grid-cols-3 px-3 sm:px-12 2xl:px-44 gap-8 py-10 flex flex-col justify-center items-center'>
       {
        cards.map((card,i)=>(
            <div key={i}>
           <div  className="max-w-full lg:max-h-[300px] overflow-hidden">
           <img src={card.img} alt='' className=' hover:scale-125 transition duration-500 cursor-pointer object-cover'/>

           </div>
<div className='my-10'>
    <div className='flex flex-col gap-6 bg-sky-100 p-6'>
<h1 className='text-3xl text-center font-bold'>
{card.title}
</h1>
<p className='text-justify text-gray-400 text-xl'>
{card.description}
</p>

    </div>


</div>

            </div>
        ))
       }



    </div>
    </>
  )
}

export default ServicesCard