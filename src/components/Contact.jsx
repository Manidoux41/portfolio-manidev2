import React from 'react'

const Contact = () => {
  return (
    <div name='contact'  className="bg-gradient-to-b from-black to-gray-800 w-full :h-screen">
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className="text-4xl text-white font-bold border-b-4 border-gray-500 p-2 inline">Contact</p>
                <p className='py-6'>Remplissez ce formulaire si vous souhaitez me confier une mission</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/4cf43313-5b92-48a1-b8f9-62dc21a8af8f" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Votre nom' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Votre email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" placeholder='Votre message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Contactez-moi
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact