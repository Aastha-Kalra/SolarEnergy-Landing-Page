import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-24 py-10" id="contact">
        <div className="flex justify-center items-center text-sky-500 font-semibold text-xl tracking-widest">
          CONTACT
        </div>
        <div className="flex justify-center items-center text-black/80 font-bold  text-6xl my-4">
          Get In Touch
        </div>
        <div className="flex justify-center items-center mt-5 flex-col gap-1 ">
          <hr className="bg-sky-500 h-[3px] w-44" />

          <hr className="bg-sky-500 h-[3px] w-32 " />
        </div>

        <div className="mt-10">
          <form action="" className=" px-5 sm:px-16 2xl:px-44">
            <div className="flex justify-center items-center gap-5">
              <input
                type="text"
                className="bg-sky-50 w-full h-14 text-xl pl-4 focus:outline-4 outline-sky-300 text-slate-600 "
                placeholder="Your Name"
              />
              <input
                type="text"
                className="bg-sky-50 w-full h-14 text-xl pl-4 focus:outline-4 outline-sky-300 text-slate-600 "
                placeholder="Your Email"
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                className="bg-sky-50 w-full h-14 text-xl pl-4 focus:outline-4 outline-sky-300 text-slate-600 "
                placeholder="Subject"
              />
            </div>
            <br />
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="bg-sky-50 w-full  text-xl p-4 focus:outline-4 outline-sky-300 text-slate-600 "
                placeholder="This form is under maintenance, We'll notify you when it'll share response"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center my-5">
          <button className="bg-sky-500 px-12 py-4 text-xl text-white">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
