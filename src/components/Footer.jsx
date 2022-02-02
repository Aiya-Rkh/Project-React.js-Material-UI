import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="container-footer">
      {/* <div className="footer">
        <img
          src="https://mysushi.by/wp-content/uploads/2020/04/logo01.png"
          alt=""
        />
      </div> */}
      <div className="footer-icons">
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
          alt=""
        />

        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/726/726573.png"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/1057/1057123.png"
          alt=""
        />
      </div>
      <div className="footer-info">
        <p>О нас</p>
        <p>Поддержка</p>
      </div>
      <div className="footer-address">
        <img
          src="https://cdn-icons-png.flaticon.com/128/100/100514.png"
          alt=""
        />
        <p>2022</p>
        <p>zhan_rakhimberd</p>
      </div>
    </div>
  );
};

export default Footer;
