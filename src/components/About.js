import React from 'react'

const About = () => {
    return (
      <div name='about' className='w-full md:h-screen bg-[#0a192f] text-gray-300 pt-16'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[940px] w-full grid grid-cols-2 gap-8 pt-6'>
            <div className='sm:text-right pb-6 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#00ff00]'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[940px] w-full grid sm:grid-cols-2 gap-6 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Alin, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p >
                Currently, I focus on developing responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps.
                I love working in fast-paced environments. Adaptable and self-motivated learner. interested in new programming technologies, and continuous self-improvement.<br/>
                I would love to work for a team that is truly passionate about what they create and that is striving to consistently move forward.
                </p>  
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default About;