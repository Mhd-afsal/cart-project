import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './slice';
import { handledelete } from './slice';

const Cart = () => {

  const data=useSelector((state)=>state.counter.data);
  const dispatch=useDispatch()
 console.log(data);
 

  return (
  
    <div className='ml-20 '>

      <h2 className='text-4xl text-center mt-5 font-bold'>Your Cart</h2>
        <div className='flex pt-20 gap-100 ml-20  font-bold text-blue-950'>
   <h4>product</h4>
   <h4 className='ml-55'>Price</h4>
   <h4>Quantity</h4>

          </div>
     
      {
        data.map((item,index)=>(
          <>
        
          
          
          <div className='flex border-none shadow-2xl h-70 mt-5 mr-10' key={index}>
            

            <div className='flex '>
           <img   className="h-40 w-[20%] mt-10" src={item.img} alt="img" />
           <div className='pt-30'>
            <h2 className="font-bold h-5 mt-2 mb-2">{item.brand}</h2>
            <p>{item.description}</p>
               </div>
               
            <div> 
              <p className="font-semibold  ml-65 pt-35 ">₹{item.price}</p></div>
           
            </div>
       
          <div className='mt-30 ml-90 flex gap-3.5 '>
          
            <button className='text-2xl font-semibold border-2 w-10 h-10 text-center rounded-sm text-green-700' onClick={()=>dispatch(increment(item.id))}>+</button>
              <p className="font-semibold border-2 w-10 text-center rounded-sm h-10 pt-2 " > {item.quantity}</p>
           <button className='text-2xl font-semibold border-2 w-10 text-center h-10 rounded-sm text-red-800' onClick={()=>dispatch(decrement(item.id))}>-</button>

           <button className='text-2xl font-semibold ml-30 w-10 text-center h-10 text-gray-500' onClick={()=>dispatch(handledelete(item.id))}>x</button>
         </div>
          </div>
        </>
        ))
      }
    </div>
  )
}

export default Cart
