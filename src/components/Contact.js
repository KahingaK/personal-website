import React from 'react'

function Contact() {
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
                <form action='https://getform.io/f/fa226873-ba2e-401e-a16c-e7f889fb9b15' method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name ' placeholder='Enter Your name..' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="text" name='email ' placeholder='Enter Your email..' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name='message' placeholder='Leave a message here...' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets talk</button>



                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact