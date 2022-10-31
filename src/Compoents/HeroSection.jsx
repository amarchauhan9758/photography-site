import React,{useEffect} from 'react'
import backgroundImg1 from '../assets/background-2.jpg'
import backgroundImg2 from '../assets/swatch.jpg'
import backgroundImg3 from '../assets/toolbar.jpg'
import backgroundImg4 from '../assets/slidepic.png'
import backgroundImg5 from '../assets/background-3.jpg'
import backgroundImg6 from '../assets/background-9.jpg'
import backgroundImg7 from '../assets/screen.png'
import './HeroStyle.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles







function HeroSection() {
 useEffect(()=>{
  AOS.init( {  duration:2000 } );
 })

  return (
    <>

      <div className=' relative px-32 z-[-9999999]  min-h-full bg-[#27292B] container'>
        <h1   data-aos="fade-left"  className='text-6xl leading-20 text-gray-200 font-bold py-12'>Hipster-as-fuck perspectives for your designs.</h1>
        <div  data-aos="zoom-in-up"  className='hero  h-[78rem]  '>
          <p  data-aos="fade-right"  className='text-lg  text-gray-300'>Photoshop Plugin to transform your work into a unique perspective.</p>
          <p   data-aos="zoom-in-up"  className='text-lg  text-gray-300 '>Mac & Win. Photoshop CC 2019 Ready</p>
          <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Buy Now $20</button>


          <div className='mt-[24rem] items-start flex '>
            <div  data-aos="zoom-in-up" className=''>
              <img src={backgroundImg3} alt='toolbar' />
            </div>
            <div className='w-1/4 px-2'>
              <h1 className='text-2xl text-white font-semibold'>Pure Fucking Magic</h1>
              <p className='text-gray-400 text-lg'>Built by slave fairies and unicorn horns, this Photoshop Plugin couldn’t possibly be any more fucking amazing</p>
              <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Buy Now $20</button>
            </div>
          </div>

        </div>
        <div className='flex items-start bg-[#27292B] justify-center gap-10'>
          <div className='text-right w-1/4 '>
            <h1 className='text-2xl text-white font-semibold'>Right there in yo face</h1>
            <p className='text-gray-400 text-lg'>We’ve built this bad boy into a badass Photoshop Plugin so every time you’re in Photoshop this panel stays with you like a bad STD</p>
            <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Buy Now $20</button>
          </div>
          <div  data-aos="zoom-in-left"  >
            <img src={backgroundImg2} alt='swatch' />
          </div>

        </div>


        <div data-aos="fade-up">
          <div className='w-1/3  text-start'>
            <h1 className='text-lg text-white font-semibold py-2'>Same great Perspectives, only better</h1>

            <p className='text-gray-400 '>Perspective Mockups is a clever little Photoshop Plugin that makes presenting your ideas a breeze.</p>

            <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Buy Now $20</button>

          </div>
          <div data-aos="zoom-out" className=' '>
            <img src={backgroundImg1} alt='' />
          </div>
        </div>

        <div className='flex justify-center gap-10 items-center'>
          <div className='w-1/4'>
            <h1 className='text-lg text-right   text-white font-semibold py-2'>Meet the Plugin</h1>

            <p className='text-gray-400 text-right '>Have a play with the Perspective Mockups Plugin right here.</p>


          </div>
          <div   data-aos="zoom-in"  className=''>
            <img src={backgroundImg4} alt='slidepic' />
          </div>
          <div>
            <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Buy Now $20</button>
          </div>
        </div>


        <div className='flex items-start mt-24 justify-between   gap-10'>
          <div data-aos="fade-left" className='text-start w-1/4 '>
            <h1 className='text-2xl text-white font-semibold'>How it works</h1>
            <p className='text-gray-400 text-lg'>We’ve built this bad boy into a badass Photoshop Plugin so every time you’re in Photoshop this panel stays with you like a bad STD</p>
            <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Buy Now $20</button>
          </div>
          <div data-aos="fade-up" className=''>
            <img src={backgroundImg2} alt='swatch' />
          </div>

        </div>
       

       <div className=''>
        <div data-aos="fade-left" className=' text-gray-50 '>
          <h1 className='font-semibold text-6xl leading-relaxed my-2'>Fully Editable. No Fuss.</h1>
          <p className='text-start text-gray-400 text-lg'>All Perspective Mockups Photoshop actions are fully customizable and editable. We don't flatten any layers so you</p>
          <p className='text-start text-gray-400 text-lg'>have the ability to fully customize each action and presentation to your needs and designs.</p>
          <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Start Being Amazing</button>

        </div>
        <div data-aos="zoom-out" className=''>
          <img src={backgroundImg5} alt='background3' />
        </div>
       </div>


       <div className=''>
        <div data-aos="fade-right" className=' text-gray-50 '>
          <h1 className='font-semibold text-6xl leading-relaxed my-2'>Perspecti-fy anything!</h1>
          <p className='text-start text-gray-400 text-lg'>With the Perspective Mockups Photoshop plugin installed you can turn any flat graphic into a badass looking</p>
          <p className='text-start text-gray-400 text-lg'>perspective. Simply remove the background from your artwork and run the perpsectives for great results!</p>
          <button className='px-8 py-3 my-5 text-white bg-green-800 hover:bg-green-900 font-semibold rounded'>Checkout via Fairy-Pay </button>

        </div>
        <div   data-aos="zoom-in-down"  className=''>
          <img src={backgroundImg6} alt='background6' />
        </div>
       </div>


       <div className='mt-12 text-gray-50'>
        <h1>Copyright 2022 Perspective Mockups. Proudly brought to you by www.BlazRobar.com in conjunction with www.bespohk.com. Artwork in mockups by Design Modo.</h1>
        <h1>No design fairies were actually hurt during the making of this Photoshop Plugin or this website...none that we've found anyhoo. V2 Contact Us.</h1>
       </div>

       <div className='mt-28'>
        <img src={backgroundImg7} alt='backgroundImg7' />
       </div>

      </div>


    </>
  )
}

export default HeroSection
