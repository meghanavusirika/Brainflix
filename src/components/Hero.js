import React from "react";
import video from "../assets/Video/BrainStation Sample Video.mp4";
import poster from "../assets/Images/euro.JPG";

export default function Hero() {
  return (
    <div className="hero">
      <video className="hero__video" poster={poster} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}