import React from 'react';

import FirstWeb from '../assets/Full-Responsive-Website-Project.png';
import SecWeb from '../assets/Travel-Website-Project_2.png';
import ThirdWeb from '../assets/Web-Fit.png';
import CryptoApp from '../assets/CryptoApp.png';
import AwesomeSports from '../assets/React-Awesome-Sports.png';
import DarkLightToggle from '../assets/Dark-Light-Toggle.png';

const Work = () => {
  return (
    <div  name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] px-8 pt-16'>
      <div className='max-w-[940px] mx-auto p-4 flex flex-col justify-center w-full h-full px-8'>
        <div className='pb-8'>
          <p  className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00ff00] '>
           My Portfolio
          </p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${FirstWeb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider border-b-4 border-[#00ff00]'>
                HTML CSS & JavaScript
              </span>
              <div className='pt-8 text-center'>
                <a href='https://r-alin-gabriel.github.io/Full-Responsive-Website-Project/index.html' target="_blank" rel="noreferrer">
                  <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00]  '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/R-Alin-Gabriel/Full-Responsive-Website-Project' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SecWeb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider border-b-4 border-[#00ff00]'>
              HTML CSS & JavaScript
              </span>
              <div className='pt-8 text-center'>
                <a href='https://r-alin-gabriel.github.io/Travel-Website-Project_2/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/R-Alin-Gabriel/Travel-Website-Project_2' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ThirdWeb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider border-b-4 border-[#00ff00] '>
              HTML CSS & JavaScript
              </span>
              <div className='pt-8 text-center'>
                <a href='https://r-alin-gabriel.github.io/Web-Fit/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/R-Alin-Gabriel/Web-Fit' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] ' >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CryptoApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider border-b-4 border-[#00ff00] '>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://r-alin-gabriel.github.io/rj-crypto/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/R-Alin-Gabriel/rj-crypto' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${AwesomeSports})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider border-b-4 border-[#00ff00] '>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://r-alin-gabriel.github.io/React-Awesome-Sports/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/R-Alin-Gabriel/React-Awesome-Sports' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00] '>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${DarkLightToggle})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  '
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-xl font-bold text-white border-b-4 border-[#00ff00] tracking-wider  '>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://r-alin-gabriel.github.io/rejs-toggle-dark-light/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00]   '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/R-Alin-Gabriel/rejs-toggle-dark-light' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  border-2 shadow-md hover:bg-[#00ff00] hover:text-white hover:border-[#00ff00]  '>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;