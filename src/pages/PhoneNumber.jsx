import { Call } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PhoneNumber = () => {
  return (
    <>
      <div>
        <Card
          sx={{
            //   maxWidth: 345,
            marginTop: "150px",
            display: "flex",
            textAlign: "center",
            marginLeft: "500px",
            width: "550px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://mysushi.by/wp-content/uploads/2020/04/logo01.png"
              alt="logo"
              style={{
                objectFit: "contain",
                width: "280px",
                marginLeft: "145px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Позвоните нам для совершения заказ!
              </Typography>

              <hr />
              <hr />
              <br />
              <Typography variant="body2" color="text.secondary">
                Вкусная японская кухня
                <br />
                <hr />
                <hr />
                <br />
                Быстрая доставка
                <hr />
                <hr />
              </Typography>
              <br />
              <Link type="number" to="+996500002422">
                <Button color="inherit">
                  <Call />
                  Позвонить!
                </Button>
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default PhoneNumber;
