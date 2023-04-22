import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer>
        <div className="footer_section">
          {/* {titles.map((val, i) => (
            <div className="footer_items_title" key={i}>
              <h3>{val.title}</h3>
            </div>
          ))} */}
          {links.map((list, i) => (
            <ul key={i}>
              {list.map((link, i) => (
                <li key={i}>{link.link}</li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
