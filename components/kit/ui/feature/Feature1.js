import React from "react";

const Feature1 = () => {
  return (
    <div className="container flex flex-col-reverse justify-center px-10 pt-6 pb-5 mx-auto lg:flex-row lg:items-center lg:space-x-24 xl:space-x-32">
      <div className="flex flex-col mt-10 lg:w-1/3 lg:items-center sm:mt-14">
        <h1 className="text-4xl font-semibold leading-10 text-gray-800 xl:text-5xl">
          Our featured items.
        </h1>
        <p className="mt-8 leading-normal text-gray-600 lg:text-sm xl:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed.
        </p>
        <div className="flex items-center w-full mt-6 space-x-4">
          <button className="flex items-center justify-center w-12 h-12 bg-indigo-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.4375 5L16.5833 12L9.4375 19"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p
            aria-hidden="true"
            className="text-base font-semibold leading-none text-gray-800"
          >
            Discover more
          </p>
        </div>
      </div>
      <div
        role="list"
        className="flex flex-col h-full lg:w-2/3 sm:flex-row sm:space-x-6"
      >
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center bg-indigo-100 cursor-pointer mt-9 sm:w-1/3 pb-14"
        >
          <img
            src="https://i.ibb.co/RP9YtKw/stephanie-harvey-T0inbt7n-RME-unsplash-removebg-preview-1.png"
            alt="Aloe Vera Plant"
            role="img"
          />
          <p className="text-xl font-bold leading-tight text-center text-gray-600 mt-9 xl:mt-10">
            $90
          </p>
          <p className="mt-4 text-xl font-medium leading-tight text-center text-gray-800">
            Aloe vera plant
          </p>
        </div>
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center cursor-pointer mt-7 md:mt-10 lg:mt-9 sm:w-1/3 pb-14 hover:bg-indigo-100"
        >
          <img
            src="https://i.ibb.co/rbKtS9t/galina-n-mizi-Nqv-Jx5-M-unsplash-removebg-preview-1.png"
            alt="Aloe Vera Plant"
            role="img"
            className="mt-10 mb-2 xl:mb-6"
          />
          <p className="mt-12 text-xl font-bold leading-tight text-center text-gray-600 lg:mt-10">
            $90
          </p>
          <p className="mt-4 text-xl font-medium leading-tight text-center text-gray-800">
            Aloe vera plant
          </p>
        </div>
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center cursor-pointer mt-9 sm:w-1/3 pb-14 hover:bg-indigo-100"
        >
          <img
            src="https://i.ibb.co/SX2Wp40/lina-silivanova-yw-RYbp-6p8c-unsplash-removebg-preview-1.png"
            alt="Cactus Plant"
            role="img"
          />
          <p className="mt-10 text-xl font-bold leading-tight text-center text-gray-600">
            $90
          </p>
          <p className="mt-4 text-xl font-medium leading-tight text-center text-gray-800">
            Aloe vera plant
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
