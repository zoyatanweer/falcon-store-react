import React from "react";
import "./Footer.css";
import { CopyrightIcon } from "../../Assets/Svg/allsvg";

{
  /* footer  */
}
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h5 className="footer-title typography-h5">
          Made with ❤️ by Zoya Tanweer
        </h5>
        <h6 className="footer-contact typography-h6">
          Contact me
          <ul>
            <li className="list-item footer-item list-non-bullet">
              <a className="link" href="https://github.com/zoyatanweer">
                github
              </a>
            </li>
            <li className="list-item footer-item list-non-bullet">
              <a
                className="link"
                href="https://www.linkedin.com/in/zoya-tanweer-9440431b9/"
              >
                linkedin
              </a>
            </li>
            <li className="list-item footer-item list-non-bullet">
              <a className="link" href="https://twitter.com/ItsZoya28">
                twitter
              </a>
            </li>
          </ul>
          <br />
          <FooterIcons svg={<CopyrightIcon />} />
        </h6>
      </div>
    </footer>
  );
};

export { Footer };

const FooterIcons = (props) => {
  return <div className="footer-copyright">{props.svg} 2022 | zoyatanweer</div>;
};