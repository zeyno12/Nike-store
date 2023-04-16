import React from "react";
import Clips from "../utils/Clips";
import SosialLinks from "../utils/SosialLink";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="container_hero">
        <div className="theme_clip"></div>
        <div className="items_section">
          <div className="hero_text_items">
            <h1 className="text_title">{title}</h1>
            <h2 className="text_title">{subtitle}</h2>
            <button type="submit" className="btn_hero">
              {btntext}
            </button>
            <div className="clip_video_section">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="sosialLinks_section">
              {sociallinks?.map((val, i) => (
                <SosialLinks key={i} icon={val.icon} />
              ))}
            </div>
          </div>
          <div className="img_section">
            <img src={img} alt="hero-img/img" className="img_hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
