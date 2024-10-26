import React from 'react'
import welcomeImage from '../assets/Rectangle 8.png'
import img1 from '../assets/product-selected.png'
import img2 from '../assets/product-selected (1).png'
import img3 from '../assets/product-selected (2).png'


export default function Order() {
  return (
    <div>
    <div className="text-center">
  <img
    src={welcomeImage}
    alt=""
    style={{
      width: "1040px",
      height: "600px",
      backgroundColor: "#FFF3E0",
    }}
  />
  <h1
    className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white tracking-wide text-8xl font-bold font-mono"
    style={{
      textShadow: `
        -1px -1px 0px black,
        1px -1px 0px black,
        -1px 1px 0px black,
        1px 1px 0px black
      `,
    }}
  >
    Welcome
  </h1>
  <button
  className="absolute top-96 left-1/4 transform -translate-x-1/2 bg-blue-500 text-white py-4 px-14 font-bold rounded-full"
  style={{ backgroundColor: "#D84315" }}
>
  Order
</button>

</div>
<div className="" style={{ backgroundColor: "#FFF3E0", width: "1040px" }}>
  <h3 className="mt-20 text-4xl font-bold">YOUR PROFILE</h3>
  <div className="grid grid-cols-2 gap-28  mt-20">
    <div className="">
      <div className="grid grid-cols-2 gap-8 border-dashed border-b-2 border-gray-400 ">
        <div>
          <p className="uppercase font-semibold text-2xl">Order No:</p>
        </div>
        <div className="mb-8">
          <p className="uppercase mr-5 text-2xl text-right font-semibold">
            L312
          </p>
        </div>
      </div>
      <div className="space-y-6 mt-6">
  {[{ img: img1, name: "Rice and Curry (VEG)", price: "LKR 100", qty: 1 }, { img: img2, name: "Chicken Portion", price: "LKR 80", qty: 1 }, { img: img3, name: "Boiled Egg", price: "LKR 70", qty: 2 }]
    .map((item, index) => (
      <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src={item.img}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-md"
          />
          <div className="ml-6 text-left">
            <p className="uppercase text-lg">{item.name}</p>
            <p className="text-4xl text-black font-semibold">{item.price}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl uppercase">Quantity</p>
          <p className="text-2xl font-extrabold">{item.qty}</p>
        </div>
      </div>
    ))}
</div>
<div className="my-10 ">
  <button
    className="uppercase py-4 px-6 rounded-full font-semibold"
    style={{ backgroundColor: "#EA4B48" }}
  >
    {" "}
    cancel order
  </button>
</div>
    </div>
    <div className="w-full">
  <h3 className="text-3xl mb-5">CONDITIONS</h3>
  <ul className="list-decimal text-left text-gray-700 text-lg pl-5 mr-8">
    <li>You may cancel your order within 30 minutes of placing it...</li>
    <li>Orders can be collected at the university canteen premises...</li>
    <li>If your order is not collected within the selected time slot...</li>
    <li>Once your order has been collected, you will receive a pop-up...</li>
  </ul>
</div>
  </div>
</div>
</div>
      
  )
}
