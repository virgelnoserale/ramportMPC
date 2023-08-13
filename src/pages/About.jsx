import React from 'react'
import aBackground from '../assets/aboutbg.jpg';
import aboutImage from '../assets/aboutImg.jpg';


const About = () => {
  return (
    
    <div name="about" style={{backgroundImage:`url(${aBackground})`}}>
      
      <div  className='max-w-[1366px] flex flex-col mx-auto text-justify h-screen pt-[80px]'> 
            {/**About */}
            <div className='mx-auto flex flex-col items-center justify-center md:h-full p-4 md:flex-row'>  	    
              <div className='md:w-1/2 h-full p-4'>
                <h1 className='text-xl text-red-800 font-bold md:text-3xl'>ABOUT US</h1>
                <p className='text-violet-800 text-3xl text-left md:text-5xl md:font-bold'>Top 1 Financing Company in the Philippines</p>
                <p className='text-sm text-gray-600 pt-2 text-justify md:text-xl pb-4'>RamPort MPC Finance Corporation is one of the leading and fastest-growing finance companies in the Philippines. The company was established in June 1997 when a group of enterprising executives ventured into the consumer financing business with only three million pesos in capitalization. With good demand and sound credit, Asialink Finance Corporation was off to a good start. Today, it employs more than seven hundred personnel, thousands of independent Loan Consultants, and with over eighty branches nationwide serving the financial needs of businesses and individuals alike.</p>
                
              </div>
              {/** VisionMission*/}
              
              <div className='h-full md:w-1/2 mx-auto'>
                <div className='flex flex-col items-center h-full md:pt-16'> 
                  
       {/**           <div className='w-full h-full pt-10'>
                      <div className='w-full h-full bg-violet-800 border-2 border-transparent rounded pt-10 px-6 shadow-4'>
                        <h1 className='text-red-600 text-2xl pb-2'>VISION</h1>
                        <p className='text-white text-xl pb-4'>By 2050, we envision being at the forefront of the financing industry, by providing inclusive financial access to MSMEs and their Communities, in the Philippines and Asia.</p>
                      </div>
                  </div>

                  <div className='w-full h-full pt-2'>
                      <div className='w-full h-full bg-blue-800 border-2 border-transparent rounded pt-10 px-6'>
                        <h1 className='text-red-600 text-xl pb-2'>PURPOSE</h1>
                        <p className='text-white text-xl'>We financially enable MSMEs and their communities towards improved lives across Asia by providing Accessible, Fast, and Convenient loans, Today!.</p>
                      </div>
                  </div> */}
                  <img src={aboutImage} alt='aboutImage' className='rounded-xl w-full md:brightness-50 hover:brightness-100 duration-300'/>
                </div>  	 
              </div>

            </div>
      
      </div>

    </div>
  )
}

export default About