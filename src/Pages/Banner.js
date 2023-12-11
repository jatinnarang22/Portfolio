import React from "react";
import bannerPhoto from "../Assests/Images/bannerPhoto.png";

const Banner = () => {
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1ZNVSmfDVlTZajBpaxBvKByOhng1ertmm/view?usp=sharing"
    );
  };

  return (
    <div style={{}}>
      <div data-aos="zoom-in" className="hero h-[85vh]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5">
          <img
            src={bannerPhoto}
            className="w-sm md:max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-xs md:max-w-4xl">
            <p className="text-md">Hello I'm</p>
            <h1 className="text-2xl md:text-5xl font-bold py-1">
              Jatin Narang
            </h1>
            <p className="text-xl md:text-3xl text-red-500">
              Full-Stack Web Developer
            </p>
            <p className="text-md py-4 md:pr-8">
              I'm a junior web developer who loves coding and considers it my
              passion. I enjoy staying up to date with new technologies and
              taking on challenges, finding joy in the process. I've recently
              created some fullstack websites, which you can find in the
              projects area.
            </p>
            <div className="flex gap-8">
              <button onClick={handleDownloadCV} className="btn btn-accent">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
