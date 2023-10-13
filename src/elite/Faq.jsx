import React from "react";
import { FaCheck } from "react-icons/fa";
const Faq = () => {
  return (
    <div id="faq" className=" w-full py-20 h-full" >
      <div  className="">
        <div className="flex justify-center items-center text-sky-500 font-semibold text-xl tracking-widest" >
          FAQS
        </div>
        <div className="flex justify-center items-center text-black/80 font-bold text-4xl sm:text-6xl">
          You Should Know
        </div>
        <div className="flex justify-center items-center mt-4 flex-col gap-1 ">
          <hr className="bg-sky-500 h-[3px] w-44" />

          <hr className="bg-sky-500 h-[3px] w-32 " />
        </div>

        <div className="my-14 flex md:flex-row flex-col gap-7">
          <div className="flex flex-col md:justify-end md:items-end gap-3 w-full">
            <div className="text-3xl font-bold text-black/80 flex justify-center items-center">
              Why Switch to Solar?
            </div>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              Reduce Electricity Bills{" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
            </h2>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              24/7 Active Electircity{" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
            </h2>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              Lifetime Relief{" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
            </h2>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              One Time Investment{" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
            </h2>
          </div>

          <div className="border-l-2 border-sky-500 "></div>
          <div className="flex flex-col md:justify-start md:items-start gap-2 w-full">
            <div className="text-3xl font-bold  text-black/80 flex justify-center items-center">
              Why Choose Us?
            </div>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              {" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
              Reduce Electricity Bills{" "}
            </h2>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              {" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
              24/7 Active Electircity
            </h2>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>
              Lifetime Relief{" "}
            </h2>
            <h2 className="flex justify-center items-center font-semibold text-xl gap-2">
              {" "}
              <span className="text-green-500 font-extrabold text-2xl">
                <FaCheck />
              </span>{" "}
              One Time Investment
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center mb-28">
          <button className="px-14 py-4 bg-sky-500 hover:bg-sky-600 text-white tetx-xl font-semibold">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
