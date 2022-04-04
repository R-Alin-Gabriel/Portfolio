import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from "react-scroll"

const Home = () => {
       return (
    <div name="home" className='w-full md:h-screen h-screen bg-[#0a192f]' >

        {/* Container */}
        <div className='max-w-[940px] mx-auto px-8 flex flex-col justify-center h-full  ' >
        <p className='text-[#00ff00] font-semibold' >Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-white' >Alin Rudareanu</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'> I'm a Frontend Developer.</h2>
        
        <p className='text-[#8892b8] py-4 max-w-[700px]' > 
        My goal is to continuously grow as a developer while staying current with the latest trends and technologies. 
        </p>
        <div>
        
        <Link to='work' smooth={true} duration={500}><button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#23db23]  hover:border-[#23db23] font-semibold rounded-sm'> View Work 
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />     
        </span>
        </button></Link>
          

        </div>
    </div>
    </div>
  )
}

export default Home