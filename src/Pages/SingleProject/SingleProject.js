import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ProductInfo from "../../Assests/ProductInfo";

const SingleProject = () => {
  const { id } = useParams();
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [myProject, setMyProject] = useState([]);
  useEffect(() => {
    const filterData = ProductInfo.filter((obj) => obj?._id === parseInt(id));
    setMyProject(filterData);
  }, [id]);

  return (
    <div>
      <div className="card w-[90%] md:w-[45%] mx-auto">
        <figure className="my-5">
          <img src={myProject[0]?.image} alt="" />
        </figure>
        <h2 className="text-xl md:text-2xl">{myProject[0]?.name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline border-green-400">
            {myProject[0]?.stackCategory}
          </div>
        </div>
        <p className="py-3">
          {" "}
          <span className="font-bold">Description:</span>{" "}
          {myProject[0]?.description}
        </p>
        <p className="py-3">
          {" "}
          <span className="font-bold">Features:</span> {myProject[0]?.features}
        </p>
        <p className="py-3">
          {" "}
          <span className="font-bold">Technology:</span>{" "}
          {myProject[0]?.technology}
        </p>
        <div className="py-5">
          <h2 className="text-xl text-center underline underline-offset-2 py-5">
            Screen Shoots & Short Details
          </h2>
          <div>
            <ul className="list-disc p-5">
              <li>{myProject[0]?.detailsPoint1}</li>
              <li>{myProject[0]?.detailsPoint2}</li>
              <li>{myProject[0]?.detailsPoint3}</li>
              <li>{myProject[0]?.detailsPoint4}</li>
              <li>{myProject[0]?.detailsPoint5}</li>
            </ul>
          </div>
          <figure className="pt-5">
            <img src={myProject[0]?.infoImage1} alt="" />
          </figure>
          <figure className="py-8">
            <img src={myProject[0]?.infoImage2} alt="" />
          </figure>
          <figure className="py-1">
            <img src={myProject[0]?.infoImage3} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
