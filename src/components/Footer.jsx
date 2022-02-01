import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container className="container-footer">
      <hr />
      <div className="footer">
        <img
          src="https://mysushi.by/wp-content/uploads/2020/04/logo01.png"
          alt=""
        />
      </div>
      <span className="footer-icons">
        <h3>Свяжитесь с нами!</h3>

        <img
          src="https://cdn-icons.flaticon.com/png/128/2504/premium/2504947.png?token=exp=1643748280~hmac=d856cfad6038a5158337a9d3a39dc61e"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
          alt=""
        />
        <img
          src="https://cdn-icons.flaticon.com/png/128/2504/premium/2504903.png?token=exp=1643748394~hmac=f83a135606a4806305df13455f223638"
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
        <p>Мы ждем Вас!</p>
      </span>
    </Container>
  );
};

export default Footer;
