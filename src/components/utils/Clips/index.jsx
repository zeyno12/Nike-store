import React from "react";

const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className="clip_container">
        <img src={imgsrc} alt="img/clips" className="img_clip" />
       
        <video
          loop={true}
          muted={true}
          playsInline={true}
          autoPlay={true}
          className="clip_video"
        >
          <source src={clip} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Clips;
