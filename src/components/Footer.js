import React from "react";
import "./footer.css";

import VK from "../img/vk.ffb489eeac4ab842395ffb315910ea7f.svg";
import INST from "../img/instagram.c877a8275355fec38548544a6d0ab3b4.svg";
import TG from "../img/telegram.d37f396c3eb867de974f064a21e5b35c.svg";
import DZEN from "../img/dzen.29a6ec4090c140ae78ae5f04b74c15d0.svg";
import YT from "../img/youtube.59781f1dba62462c79aee99b371f4e71.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/bootfury">
                <img src={VK} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://instagram.com/bootfury">
                <img src={INST} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.youtube.com/channel/UC3H9SCRyxjRDg2I9N16HofQ">
                <img src={YT} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/bootfury_official">
                <img src={TG} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://dzen.ru/id/5fdf3eaabefce91f1a3a930a?share_to=link">
                <img src={DZEN} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright" />
          <p>© 2023 bootfury.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
