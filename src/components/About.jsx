import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>A propos de moi</p>
            </div>
            <p className='text-xl mt-20 '>Je suis avant tout un passionné. Passionné de découvrir de nouveaux languages informatique, passionné dans le fait même d'apprendre. C'est cette passion qui fait de moi un véritable couteau suisse dans la création et le développement d'application web. HTML, CSS et javascript sont à ce jour des languages qui ont très peu de secret pour moi. Bien évidemment, l'univers du web étant en évolution perpétuelle, il me reste toujours de nouvelles choses à découvrir. 
            </p>
            <br />
            <p className='text-xl'>Le travail en équipe ne m'est pas inconnu et je suis toujours à l'écoute des remarques de ceux avec qui je travaille. Ainsi les projets que j'ai réalisé au cours de ma formation chez OpenClassrooms témoignent de ma tenacité quant à l'aboutissement d'une fonctionnalité que j'ai à implémenter, mais reflète également un travail de qualité que je suis en mesure de rendre dans des délais impartis. 
            Aussi, si vous me faites confiance dans la réalisation de vos projets, soyez assurés des maîtres-mots suivants : <bold className="font-bold">"Qualité et Délais"</bold>.               
            </p>
        </div>
    </div>
  )
}

export default About