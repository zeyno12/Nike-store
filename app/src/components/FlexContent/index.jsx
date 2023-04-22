import React from "react";

const FlexContent = ({endpoint:{title,heading,text,img,btn}}) => {
  return (
    <>
      <div  className="flexContent">
        <div  className="flexContent_text_items">
          <h2  className="flexContent_text_heading">{heading}</h2>
          <h2>{title}</h2>
          <p>{text}</p>
        
            <button className="" type="button">{btn}</button>
          
        </div>
        <div  className="flexContent_image">
          <img src={img} alt={`img/${heading}`} className=""  />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
