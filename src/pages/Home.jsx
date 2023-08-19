import React from 'react'
//import homeBackground from '../assets/R.jpg'
import {Link} from "react-scroll";
import images from '../components/images.jsx';



const Home = () => {
  return (
    <div  name="home" style={{backgroundImage:`url(${images.imgBackgroundHome})`,backgroundSize:'cover'}} className='h-screen w-full' >
      
      <div className='max-w-[1366px] mx-auto flex flex-col items-center justify-center h-full px-4 '>
          <div className='mx-auto text-center'>
              <h1 className='subpixel-antialiased text-white text-4xl font-bold md:text-6xl hover:text-yellow-300 sm:text-5xl text'>Making Lives Better</h1>
              <p className='text-white text-sm md:text-2xl sm:text-xl p-2'>Be a member now!!! signup and be part of our growing company</p>
              
              <Link
              to="contact"
              smooth
              duration={500}
              >
              <button className='text-white bg-green-800 p-2 px-8 rounded-2xl shadow-lg border-2 hover:bg-green-200 hover:text-green-800 hover:border-green-800'>
              
              Inquire Now</button>
              </Link>
          </div>
      </div> 
    </div>
)
  
}

export default Home
