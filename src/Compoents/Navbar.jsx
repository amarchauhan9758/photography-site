import React from 'react'
import backgroundimg from '../assets/Banner.png'

function Navbar() {
  return (
    <>
  <div data-aos="fade-down" className='flex  justify-between px-32 bg-[#27292B] opacity-80'>
    <div>
        <nav className='py-10'>
            <ul className='text-white bg-red-400 px-5 rounded font-mono'>
                <li className='text-sm'>V5.1 PHOTOSHOP 2022 READY </li>
            </ul>
        </nav>
    </div>
      <div className='flex gap-10 items-center py-12'>
         <nav>
            <ul className='text-[#696969]  flex font-bold  items-center gap-10'>
                <li className='hover:text-gray-200 cursor-pointer'>Perpsective Mockups Plugin</li>
                <li className='hover:text-gray-200 cursor-pointer'>Fairy Love</li>
                <li className='hover:text-gray-200 cursor-pointer'>Support</li>
                <li className='hover:text-gray-200 cursor-pointer'>Installation</li>
                <li className='hover:text-gray-200 cursor-pointer'>Checkout</li>
            </ul>
         </nav>
            <button className='px-5 py-3 hover:bg-green-900 bg-green-800 font-bold text-white rounded'>Buy now $18</button>
      </div>
  </div>

  <div data-aos="zoom-in-up" className=''>
    <img src={backgroundimg} alt='img' />
  </div>

    </>
  )
}

export default Navbar
