import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 import { CiSearch } from "react-icons/ci";
 import { CiShoppingCart } from "react-icons/ci";
 import { CiBellOn } from "react-icons/ci";
 import { CiHeart } from "react-icons/ci";
 import { IoPersonOutline } from "react-icons/io5";
 import cart1 from './images/cart1.png'
import cart2 from './images/cart2.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div >
      <nav className='flex justify-between  p-5'>
        <h3 className='text-3xl font-bold'>Baxi Store</h3>

        <div className='flex text-2xl gap-8 stroke-[1.8] cursor-pointer'>
           <CiSearch />
        <button className='mb-5 cursor-pointer' onClick={()=>navigate("/cart")}> <CiShoppingCart /></button>  
           <CiBellOn />
           <CiHeart />
           <IoPersonOutline />
        </div>
</nav>
    

     <div className="mt-5">
  <Carousel autoPlay={true} interval={2000} showStatus={false} infiniteLoop={true} showThumbs={false} showArrows={false}>

    <div className='relative'>
      <img className='h-[60vh] relative' src={cart1}/>
      <div className='absolute top-1/2 text-center left-1/2'>
       <h1 className="text-4xl font-bold tracking-wide mb-2 font-mono font-stretch-expanded">Get The Best Product</h1>
    <p className="text-4xl font-bold tracking-wide font-mono ">At Your Home</p>
    </div>
    </div>
    <div className='relative'>
      <img className='h-[60vh]' src={cart2}/>
       <div className='absolute top-1/4 left-1/2 pl-50 ' >
          <p className="text-5xl mb-2 tracking-widest ">UPTO</p>
    <p className="text-8xl font-semi mb-2 text-amber-700">20%</p>
    <p className='text-4xl mb-2 tracking-widest'>OFFER</p>
    <p className='text-2xl font-semibold'>every shopping</p>
    </div>
    
    </div>

  </Carousel>

   
</div>



    </div>


  )
}

export default Navbar
