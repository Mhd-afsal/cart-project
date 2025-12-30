import React, { useState } from "react";
import Navbar from "./Navbar";
import product from "./data";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbDeviceMobilePlus } from "react-icons/tb";
import {useSelector,useDispatch} from "react-redux"
import {addData} from './slice'


const Product = () => {


  const data=useSelector((state)=>state.counter.data);
  const dispatch= useDispatch();

  const Addtocart=(item)=>{
    const alreadyincart=data.find((cartItem)=>cartItem.id===item.id);
    if(alreadyincart){
      alert("item is already in the cart")

    }else{
      dispatch(addData({id: item.id , brand: item.brand, description:item.description, price:item.price,img:item.img}));
    }
  }
  console.log(data);
  
  return (
    <>

      <div>
        <Navbar />
         <div className="flex mt-20 justify-center gap-40 font-bold  ">
          
       <h1><FaTruckFast className="text-4xl ml-10 text-blue-400"/>Easy to buy & retrun</h1>
       <h1> <RiSecurePaymentFill className="text-4xl ml-10 text-blue-400"/>Secure paynment</h1>
       <h1><TfiHeadphoneAlt className="text-4xl ml-10 text-blue-400"/>24x7 Support Available</h1>
       <h1><TbDeviceMobilePlus className="text-4xl ml-10 text-blue-400"/>Shop with our App</h1>
     

          </div>
        <div className=" p-5 mt-15 ">
 
          <h2 className=" font-bold text-2xl mb-5 ml-4 ">Popular Categories</h2>
          <div className="grid grid-cols-4 gap-6 ">
            {product.map((item, index) => (
              <div className="bg-blend-overlay shadow-2xl border-amber-50 p-4 " key={index}>
              
                <img
                  className=" ml-6 h-50 "
                  src={item.img}
                  alt=""
                  srcset=""
                />
                <h2 className="font-bold h-5 mt-2 mb-2">{item.brand}</h2>
                <p className="h-10 ">{item.description}</p>
                <div className="flex text-amber-200 h-5 mt-5 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="font-semibold">₹{item.price}</p>
<button
  type="button"
  onClick={()=>Addtocart(item)}
  className="bg-amber-200 p-2 w-full cursor-pointer rounded-md mt-2 font-bold"
>
  Add to cart
</button>
              </div>
            ))}
          </div>
     
        </div>
      </div>
    </>
  );
};

export default Product;
