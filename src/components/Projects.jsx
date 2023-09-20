import React from "react";
import Carousel from "react-grid-carousel";
const Projects = () => {
 return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://hashuudev-solar-site.netlify.app/img/gallery.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full my-14"
        id="projects"
      >
        <div className="bg-black/80 w-full h-full py-28 flex flex-col gap-4">
          <div className="flex justify-center items-center text-sky-500 font-semibold text-xl">
            PROJECTS
          </div>
          <div className="flex justify-center items-center text-3xl  text-white sm:text-5xl font-bold ">
            Project Photo Gallery
          </div>
          <div className="flex flex-col justify-center items-center my-4 gap-1">
            <p className="bg-sky-500 h-[3px] w-36"></p>
            <p className="bg-sky-500 h-[3px] w-28"></p>
          </div>

          <div className="">
            <Carousel cols={4} rows={1} gap={0} loop={true}>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-1.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-2.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-3.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-4.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-5.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-6.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-4.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-2.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/gallery-5.jpg"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
