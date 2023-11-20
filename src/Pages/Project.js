import React from "react";
import { useNavigate } from "react-router-dom";
// import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

const Project = ({ project }) => {
  const navigate = useNavigate();
  const handleLiveLink = () => {
    window.open(project.liveLink);
  };
  const handleClientLink = () => {
    window.open(project.githubClient);
  };
  const handleServerLink = () => {
    window.open(project.githubServer);
  };
  const handleDetails = (id) => {
    navigate(`/project/${id}`);
  };
  // swiper js slider code
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    // modules={[EffectCoverflow]}
    className="mySwiper"
  ></Swiper>;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <SwiperSlide>
          <img
            className="rounded-xl p-6 md:p-0"
            src={project.image}
            alt="project screenshoot"
          />
        </SwiperSlide>
      </figure>
      <div className="card-body py-2 md:p-3">
        <h2 className="card-title md:py-2 text-2xl md:text-3xl">
          {project.name}
        </h2>
        <p title={project.description}>
          {project.description.length > 120
            ? project.description.slice(0, 120) + "..."
            : project.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline border-green-400">
            {project.stackCategory}
          </div>
        </div>

        <button
          onClick={() => {
            handleDetails(project._id);
          }}
          className="btn btn-accent"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Project;
