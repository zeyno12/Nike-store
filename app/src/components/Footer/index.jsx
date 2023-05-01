import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer>
        <div className="footer_section">
          {links.map((list, i) => (
            <ul key={i}>
              {list.map((link, i) => (
                <li key={i}>{link.link}</li>
              ))}
            </ul>
          ))}
        </div>
          <div className="end_text">
            <div>
              <p>© 2023 Claradix LLC</p>
            </div>
            <div className="sosial_links">
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Behance</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;

