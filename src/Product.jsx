import React, { useState } from "react";
import Navbar from "./Navbar";
import product from "./data";
import { FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbDeviceMobilePlus } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./slice";

const Product = () => {
  const data = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();

  // State for showing message
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const Addtocart = (item) => {
    const alreadyincart = data.find((cartItem) => cartItem.id === item.id);

    if (alreadyincart) {
      setMessage("Item is already in the cart 🛒");
    } else {
      dispatch(addData({ ...item, quantity: 1 }));
      setMessage("Added to cart successfully ✅");
    }

    setShowMessage(true);
    // Hide message after 2 seconds
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <>
      <Navbar />

      {/* Centered message */}
      {showMessage && (
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "15px 25px",
            borderRadius: "8px",
            zIndex: 1000,
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}

      {/* Features */}
      <div className="flex mt-20 justify-center gap-40 font-bold">
        <h1>
          <FaTruckFast className="text-4xl ml-10 text-blue-400" />
          Easy to buy & return
        </h1>
        <h1>
          <RiSecurePaymentFill className="text-4xl ml-10 text-blue-400" />
          Secure payment
        </h1>
        <h1>
          <TfiHeadphoneAlt className="text-4xl ml-10 text-blue-400" />
          24x7 Support Available
        </h1>
        <h1>
          <TbDeviceMobilePlus className="text-4xl ml-10 text-blue-400" />
          Shop with our App
        </h1>
      </div>

      {/* Products Grid */}
      <div className="p-5 mt-15">
        <h2 className="font-bold text-2xl mb-5 ml-4">Popular Categories</h2>
        <div className="grid grid-cols-4 gap-6">
          {product.map((item) => (
            <div
              className="bg-blend-overlay shadow-2xl border-amber-50 p-4"
              key={item.id}
            >
              <img className="ml-6 h-50" src={item.img} alt={item.brand} />
              <h2 className="font-bold h-5 mt-2 mb-2">{item.brand}</h2>
              <p className="h-10">{item.description}</p>
              <div className="flex text-amber-200 h-5 mt-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-semibold">₹{item.price}</p>
              <button
                type="button"
                onClick={() => Addtocart(item)}
                className="bg-amber-200 p-2 w-full cursor-pointer rounded-md mt-2 font-bold"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
