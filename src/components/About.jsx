import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>A propos de moi</p>
            </div>
            <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit velit perspiciatis delectus vel rerum distinctio molestiae, nam maiores ducimus ipsum quo, reprehenderit reiciendis vitae cupiditate aliquam nesciunt inventore porro dignissimos! Ad quia suscipit molestiae, dolore omnis dolor, excepturi non, nostrum voluptas sit animi quos soluta atque consequuntur fugit autem nam.                
            </p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum placeat quidem sed rem neque quaerat totam tempora quasi beatae, veritatis libero, quis possimus eaque. Inventore animi a numquam provident fuga saepe explicabo quos possimus autem quod ut consectetur molestias nostrum aperiam mollitia incidunt sed quaerat fugiat accusantium, aut quae.                
            </p>
        </div>
    </div>
  )
}

export default About