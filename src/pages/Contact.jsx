import React, {useRef}from 'react'
import emailjs from '@emailjs/browser';
import images from '../components/images';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4sgwexp', 'template_qzz18xe', form.current, 'Jv0oZqwXuQH0IruZI')
      .then((result) => {
          console.log(result.text);
          console.log("sent");

          
      }, (error) => {
          console.log(error.text);
          console.log("failed");

      });
      

  };

  const myAlert =() =>{
    toast.success('Thank you');
  }


  return (
    <div name="contact" style={{backgroundImage:`url(${images.contactImg})`,backgroundSize:'auto'}} className='h-screen'>
    
    <div className='max-w-[1366px] flex flex-col mx-auto text-justify h-screen pt-[80px]'>
    <h1 className='text-xl text-white font-bold md:text-3xl text-center pt-2'>MESSAGE US</h1>
      <div className='flex justify-center items-center mx-2'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2 p-4 m-4 rounded-md'>
      <input type="text" name="full_name" className='rounded-md p-2 mb-2' required placeholder='FullName'/>
      <input type="email" name="email" className='rounded-md p-2 mb-2' required placeholder='Email'/>
      <input type="number"  name="cellphone" className='rounded-md p-2 mb-2' required placeholder='Phone Number'/>
      <input type="text"  name="country" className='rounded-md p-2 mb-2'required placeholder='Address' />
      <textarea name="message" rows={8} className='mb-4 rounded-md p-2 'required placeholder='Message'/>
      <button onClick={myAlert} type="submit" value="Send" className='text-white p-4 bg-black font-bold rounded-md '>Lets Talk</button>
    </form>

    <ToastContainer
        position="top-left"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
       
    
     />
    </div>
    </div>
    </div>
  )
}

export default Contact
