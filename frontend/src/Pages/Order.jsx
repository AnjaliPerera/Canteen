import React from "react";
import welcomeImage from "../assets/Rectangle 8.png";
import img1 from "../assets/product-selected.png";
import img2 from "../assets/product-selected (1).png";
import img3 from "../assets/product-selected (2).png";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export default function Order() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center text-center relative">
        <div className="relative w-full">
          <img src={welcomeImage} alt="" className="w-full max-w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#FFF3E0]" />
          <h1 className="absolute top-[8rem] md:top-[10rem] lg:top-[12rem] left-1/2 transform -translate-x-1/2 text-white font-mono text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-tight text-shadow">
            Welcome
          </h1>
          <button className="absolute top-[14rem] md:top-[20rem] lg:top-[24rem] left-1/2 transform -translate-x-1/2 bg-[#D84315] text-white py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-12 rounded-full font-bold text-lg sm:text-xl">
            Order
          </button>
        </div>

        <div className="bg-[#FFF3E0] w-full max-w-[1040px] mt-10 p-6 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">YOUR PROFILE</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div>
              <div className="grid grid-cols-2 gap-2 border-b border-dashed border-gray-400 pb-4 mb-4">
                <p className="text-lg md:text-xl font-semibold uppercase">Order No:</p>
                <p className="text-lg md:text-xl font-semibold text-right uppercase">L312</p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  { img: img1, name: "Rice and Curry (VEG)", price: "LKR 100", qty: 1 },
                  { img: img2, name: "Chicken Portion", price: "LKR 80", qty: 1 },
                  { img: img3, name: "Boiled Egg", price: "LKR 70", qty: 2 },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div className="ml-4 text-left">
                        <p className="text-sm md:text-base uppercase">{item.name}</p>
                        <p className="text-lg md:text-xl font-semibold text-black">{item.price}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm md:text-base uppercase">Quantity</p>
                      <p className="text-lg md:text-xl font-bold">{item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <button className="mt-6 py-2 px-6 md:py-3 md:px-8 bg-red-600 text-white rounded-full font-semibold uppercase">
                  Cancel Order
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl mb-4">CONDITIONS</h3>
              <ul className="list-decimal text-left text-gray-600 text-sm md:text-base space-y-2">
                <li>You may cancel your order within 30 minutes of placing it. After this period, cancellations will not be accepted.</li>
                <li>Orders can be collected at the university canteen premises. Payment upon collection can be made in cash.</li>
                <li>If your order is not collected within the selected time slot, it will be automatically canceled after 30 minutes.</li>
                <li>Once your order has been collected, you will receive a pop-up message on our website requesting you to rate our service. We appreciate and welcome your feedback.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
