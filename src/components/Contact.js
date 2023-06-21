import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"


function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm('service_i6tcq5n', 'template_wddz79n', form.current, 'Do1vIelv9gzgnw0qw')
    .then((result) => {
        console.log(result.text);
        e.target.reset()
    }, (error) => {
        console.log(error.text);
    });

    }
  return (
    <div name = "contact" className=' w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col p-4 justify-center container px-8 py-8 mx-auto h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact
                </p>
                <p className='py-6'> Get in touch</p>
            </div>
            <div className='flex justify-center items-center'>
                <form ref= {form} onSubmit = {sendEmail} className='flex flex-col w-full md:w-1/2'>
                <input name='from_name' type="text"  placeholder='Enter Your name..' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input name='from_email' type="text"  placeholder='Enter Your email..' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name = 'message' placeholder='Leave a message here...' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' value= 'Lets talk'/>



                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact