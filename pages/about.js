import React from "react";
import Description from "../components/Description";
import CircleImage from '../components/CircleImage'
export default function about() {
  return ( 
    <>
      <section className="row justify-content-center container mx-auto py-4 my-4">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <Description />
        </div>
        <div className="col-lg-6 p-4 ">
          <CircleImage />
        </div>
      </section>
    </>
  );
}
