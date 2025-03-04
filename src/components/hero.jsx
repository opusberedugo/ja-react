import React from "react";

const Hero = ({title,lead,cta }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
            {lead}
          </p>
          <button className="btn btn-primary">{cta}</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;