import React from "react";
import Carousel from "react-grid-carousel";

const Testimonials = () => {



  return (
    <>
      <div className="py-10" id="testimonials">
        <div className="flex justify-center items-center text-sky-500 font-semibold text-xl tracking-widest">
          TESTIMONIAL
        </div>
        <div className="flex justify-center items-center text-black/80 font-bold text-4xl  sm:text-6xl my-4">
          Our Clients Say
        </div>
        <div className="flex justify-center items-center mt-5 flex-col gap-1 ">
          <hr className="bg-sky-500 h-[3px] w-44" />

          <hr className="bg-sky-500 h-[3px] w-32 " />
        </div>

        <div className="w-full mt-10">
          <div>
            <Carousel>
              <Carousel.Item>
                <div className="bg-white mt-10 flex flex-col justify-center items-center
                    rounded-2xl
                    shadow-inner shadow-black
                    py-5
                ">
                <img src="https://hashuudev-solar-site.netlify.app/img/12.jpg" alt=""  className="w-24 h-24"/>
                <p className="md:text-2xl font-semibold text-gray-500 mt-2 text-center">The solar panels they provided are highly efficient, and we're <br className="sm:block hidden"/> already seeing significant savings on our energy bills</p>
                
                <p className="text-3xl font-bold text-black/80 my-2">Sajjad Awan</p>
                <p className="text-gray-500  font-bold text-lg">CEO : Awan Fabrics</p>
               
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white mt-10 flex flex-col justify-center items-center 
                rounded-2xl
                shadow-inner shadow-black py-8">
                <img src="https://hashuudev-solar-site.netlify.app/img/11.jpg" alt=""  className="w-24 h-24"/>
                <p className="md:text-2xl font-semibold text-gray-500 mt-2 text-center">Great customer service! They were responsive and helpful <br className="sm:block hidden"/>throughout the entire process</p>
                <p className="text-3xl font-bold text-black/80 my-2">Ayub Arain</p>
                <p  className="text-gray-500 font-bold text-lg">Doctor</p>
                </div>
              </Carousel.Item>
            </Carousel>

        
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
