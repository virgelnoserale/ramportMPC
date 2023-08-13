import React from 'react'
import savingImg from '../assets/savings.png';
import loadImg from '../assets/loans.png';
import insuranceImg from '../assets/insurance.png';


const About = () => {
  return (
    
    <div name="services">
      
      <div  className='max-w-[1366px] flex flex-col mx-auto text-justify h-screen pt-[80px]'> 
            {/**Services */}
            
            <div className='p-4'>
              <h1 className='text-center px-4 pt-0 md:pt-4 md:pb-8  text-3xl text-blue-800 font-bold md:text-4xl'>PRODUCT AND SERVICES WE OFFER</h1>
            </div>


            <div className='mx-auto flex flex-col items-center justify-center gap-4 w-full md:h-full md:p-4 md:flex-row'>  	    
              
            <div className='h-full md:w-1/3 mx-auto w-full'>
                <div className='text-center text-2xl text-violet-800 md:text-2xl font-semibold'>SAVING</div>
                
                
                <div className='flex flex-col items-center h-full md:pt-2 pt-2'> 
                  <img src={savingImg} alt='savingImage' className='rounded-xl w-[150px] md:w-[270px] hover:md:w-[300px] duration-300 '/>
                </div>  	
                 
              </div>
              
              <div className='h-full md:w-1/3 mx-auto'>
                <div className='text-center text-2xl text-violet-800 md:text-2xl font-semibold'>LOAN</div>
                <div className='flex flex-col items-center h-full md:pt-2 pt-2'> 
                  <img src={loadImg} alt='loadImg' className='rounded-xl w-[150px] md:w-[270px] hover:md:w-[300px] duration-300'/>
                </div>  	 
              </div>

              <div className='h-full md:w-1/3 mx-auto'>
                <div className='text-center text-2xl text-violet-800 md:text-2xl font-semibold'>INSURANCE</div>
                <div className='flex flex-col items-center h-full md:pt-2 pt-2'> 
                  <img src={insuranceImg} alt='insuranceImg' className='rounded-xl w-[150px] md:w-[270px] hover:md:w-[300px] duration-300'/>
                </div>  	 
              </div>




            </div>
      
      </div>

    </div>
  )
}

export default About