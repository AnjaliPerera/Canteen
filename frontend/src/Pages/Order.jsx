import React from 'react'
import image1 from '../assets/Rectangle 8.png'

export default function Order() {
  return (
    <div>
    <div className="text-center">
  <img
    src={image1}
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
    </div>
  </div>
</div>
</div>
      
  )
}
