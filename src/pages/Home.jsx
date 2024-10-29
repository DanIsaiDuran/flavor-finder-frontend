import React from 'react'
import image from '../assets/estofado-lentejas-chorizo-patatas.avif'

function Home() {
  return (
    <div>
        <div className='mx-12'>
            <img src={image} alt="estofado" className="w-full object-cover rounded-3xl" style={{ height: "35rem" }}/>
        </div>
    </div>
  )
}

export default Home
