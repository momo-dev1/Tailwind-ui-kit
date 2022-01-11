import { MenuIcon, StarIcon } from "@heroicons/react/outline";

import { useState } from "react";

const Hero1 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActiv] = useState(0);
  const menus = ["Home", "Delivery", "Pricing", "FAQs", "Contact"];

  return (
    <>
      <div
        className={` ${
          sidebarOpen ? "overflow-hidden h-screen" : ""
        } min-h-screen w-full font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100`}
      >
        <nav className="flex items-center justify-between max-w-screen-xl px-6 py-8 mx-auto md:px-12 lg:px-16 xl:px-24">
          <a href="#" className="text-3xl font-bold tracking-wide md:text-4xl">
            Organ<span className="text-[#71B214]">o</span>
          </a>
          <div
            className={`inset-0 z-20 flex-col items-center justify-center space-y-8 transition-all bg-white/70 backdrop-blur-xl md:static md:bg-transparent md:flex md:space-y-0 md:space-x-8 md:flex-row lg:space-x-14 ${
              sidebarOpen ? "fixed flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6 lg:md:-x-8">
              {menus.map((menuItem, idx) => (
                <li
                  key={idx}
                  className={`text-lg font-medium md:text-base lg:text-lg group ${
                    active === idx && "text-[#71B214]"
                  }`}
                >
                  <a href="#"> {menuItem} </a>
                  <div className="h-0.5 bg-[#71B214] scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                </li>
              ))}
            </ul>
            <button className="flex items-center justify-center font-medium text-white transition-shadow duration-300 h-[3.25rem] px-7 bg-[#71B214] rounded-xl hover:shadow-primary whitespace-nowrap">
              Get started
            </button>
          </div>
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="relative z-30 block md:hidden"
          >
            <MenuIcon className="w-8 h-8 text-gray-900 fill-current" />
          </button>
        </nav>

        <div className="flex flex-wrap-reverse justify-between max-w-screen-xl px-6 py-12 mx-auto gap-y-24 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="relative z-10 w-full md:w-1/2">
            <img
              className="absolute top-0 right-0 w-24 h-auto md:-top-4 md:-right-8"
              src="/images/hero/hero1/leaf.png"
              alt=""
            />
            <span className="flex items-center px-1 text-xl text-[#71B214]">
              <span className="font-medium">100% Organic food</span>
              <img
                className="w-auto h-8"
                src="/images/hero/hero1/vegetable.png"
                alt=""
              />
            </span>
            <h1 className="pt-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl lg:text-6xl whitespace-nowrap">
              Healthy Lifestyle <br />
              is your only <br />
              <span className="whitespace-nowrap text-[#71B214]">
                unfair advantage
              </span>
            </h1>
            <p className="max-w-md pt-8 font-normal leading-relaxed text-[#606060] sm:text-lg">
              Choose healthy habits with Organo daily meal prepared by our
              expert nutritionist and chef
            </p>
            <div className="flex pt-8 space-x-4 sm:space-x-6">
              <button className="flex items-center justify-center w-full px-8 font-medium text-white transition-shadow duration-300 sm:w-auto h-[3.25rem] bg-[#71B214] rounded-xl whitespace-nowrap hover:shadow-primary">
                Get started
              </button>
              <button className="flex items-center justify-center w-full px-8 font-medium text-gray-900 transition-shadow duration-300 border border-gray-900 sm:w-auto h-[3.25rem] rounded-xl whitespace-nowrap hover:shadow-xl">
                Explore menu
              </button>
            </div>
            <div className="flex pt-20">
              <img className="w-24" src="/images/hero/hero1/chef.png" alt="" />
              <div className="pt-5 pl-3">
                <div className="text-xl font-bold leading-relaxed">
                  Chef of the month
                </div>
                <div className="inline-flex leading-relaxed text-gray-600">
                  People loved his 🍳
                </div>
                <div className="font-bold leading-relaxed text-[#71B214]">
                  80+ famous dishes
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between w-full md:w-1/2">
            <img
              className="self-center w-96 lg:w-full drop-shadow-2xl lg:self-end"
              src="/images/hero/hero1/dish.png"
              alt=""
            />
            <div className="absolute top-0 right-0 flex flex-col py-5 transition-all duration-300 shadow-xl lg:-right-6 lg:top-28 px-7 rounded-2xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((img, idx) => (
                  <div
                    key={idx}
                    className=" overflow-hidden border-4 border-white rounded-full w-13 h-[3.25rem]"
                  >
                    <img
                      className="object-cover w-full h-full"
                      src={`/images/hero/hero1/avatar-${img}.jpeg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="pt-3 font-bold">Happy customers</div>
              <div className="flex items-center leading-relaxed text-[#606060]">
                <StarIcon className="w-5 h-5" />
                <span className="pl-1">4.9 (+2.5k Ratings)</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 flex transition-all duration-300 shadow-xl md:bottom-32 lg:bottom-16 bg-white/80 rounded-2xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="self-end w-auto h-20"
                src="/images/hero/hero1/driver.png"
                alt=""
              />
              <div className="py-5 pl-2 pr-7">
                <div className="font-bold">Fast delivery</div>
                <div className="leading-relaxed text-[#606060]">
                  30 mins delivery 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
