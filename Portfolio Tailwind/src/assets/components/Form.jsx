
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser'; 

// function Form (){ 
//     return( 
//               <div className='w-80 h-110 flex justify-start gap-3 flex-col items-center '>
//    <h1 className='text-3xl'>Send Me A Message</h1> 
//         <input type="text" placeholder='Name' className='border-3 border-black text-black h-12 w-80 rounded-xl text-2xl pl-5  placholder:text-gray-500 '/>
//         <input type="text" placeholder='Email' className='border-3 border-black text-black h-12 w-80 rounded-xl text-2xl pl-5 
//         placholder:text-gray-500 '/>  
//         <input type="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Phone' className ='border-3 border-black text-black h-12 w-80 rounded-xl text-2xl pl-5  placholder:text-gray-500 '/> 
//         <textarea name="" id="" placeholder='Message...' className='h-40 w-80 border-black border-3 rounded-xl text-2xl pl-5 placholder:text-gray-500'></textarea> 
//         <button className='border-black border-3 h-14 w-40 rounded-xl mb-5 bg-[#729B79] text-white text-2xl flex justify-center items-center cursor-pointer'>Submit</button>
//         </div>
//     ) 

// };
 
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 

function Form() { 
  // 1. Create a reference to pull the form data
  const formRef = useRef();
  const [status, setStatus] = useState('');

  // 2. Form submission handler function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_scgbiaa',   // Replace with your Service ID
        'template_rkrm2w8',  // Replace with your Template ID
        formRef.current,
        'gbwwMxJ0hYdsV0dqf'    // Replace with your Public Key
      )
      .then(
        () => {
          setStatus('Success! Message sent.');
          formRef.current.reset(); // Clears form inputs on success
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus('Failed to send. Please try again.');
        }
      );
  };

  return ( 
    // 3. Changed <div> to <form> and attached ref/onSubmit
    <form 
      ref={formRef}
      onSubmit={sendEmail}
      className='w-full max-w-sm h-110 flex justify-start gap-3  px-5 flex-col items-center'
    >
      <h1 className='text-3xl'>Send Me A Message</h1> 
      
      {/* 4. Added CRUCIAL "name" tags so EmailJS maps variables to your email template */}
      <input 
        type="text" 
        name="user_name"
        placeholder='Name' 
        required
        className='border-3 border-black text-black h-12 w-full rounded-xl text-2xl pl-5 placeholder:text-gray-500'
      />
      
      <input 
        type="email" 
        name="user_email"
        placeholder='Email' 
        required
        className='border-3 border-black text-black h-12 w-full rounded-xl text-2xl pl-5 placeholder:text-gray-500'
      />  
      
      <input 
        type="tel" 
        name="user_phone"
        placeholder='Phone (123-456-7890)' 
        className='border-3 border-black text-black h-12 w-full rounded-xl text-2xl pl-5 placeholder:text-gray-500'
      /> 
      
      <textarea 
        name="message" 
        placeholder='Message...' 
        required
        className='h-40 w-full border-black border-3 rounded-xl text-2xl pl-5 placeholder:text-gray-500'
      ></textarea> 
      
      {/* 5. Set type="submit" so the browser triggers the onSubmit function */}
      <button 
        type="submit"
        className='border-black border-3 h-14 w-40 rounded-xl mb-3 bg-[#729B79] text-white text-2xl flex justify-center items-center cursor-pointer active:scale-95 transition-transform'
      >
        Submit
      </button>

      {/* Visual notification text for status updates */}
      {status && <p className="text-sm font-semibold text-slate-700">{status}</p>}
    </form>
  );
}


export default Form;
