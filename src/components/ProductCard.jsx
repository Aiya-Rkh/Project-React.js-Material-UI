import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";
import { AddShoppingCartRounded } from "@mui/icons-material";

// ! Карточки в главном меню! GRID

export default function ProductCard(props) {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    React.useContext(ClientContext);
  return (
    <Card
      style={{
        minWidth: "280px",
        height: "100%",
        position: "relative",
        paddingBottom: "15px",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={props.item.image}
        alt="sushi"
        className="image"
        style={{
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography
          style={{ heigth: "", overflow: "hidden" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.item.name}
        </Typography>
        <hr />
        <br />
        <Typography variant="body1" color="black">
          {props.item.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justicyContent: "spaceAround" }}>
        {checkProductInCart(props.item.id) ? (
          <Button
            onClick={() => deleteProductFromCart(props.item.id)}
            size="small"
            variant="contained"
            color="error"
            sx={{ marginLeft: "15px", marginTop: 0 }}
          >
            <AddShoppingCartRounded />
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(props.item)}
            size="small"
            variant="outlined"
            style={{ marginLeft: "15px", bottom: "10px", position: "absolute" }}
            color="error"
          >
            <AddShoppingCartRounded />
          </Button>
        )}

        <Typography
          comsponent="div"
          variant="h6"
          style={{
            marginLeft: "60%",
            position: "absolute",
            bottom: "10px",
            fontWeight: "bold",
          }}
        >
          {props.item.price} сом
        </Typography>

        {/* <Link
          style={{ marginLeft: 15 }}
          to={`/product-detail/${props.item.id}`}
        >
          <Button size="small" variant="outlined">
            Ингредиенты
          </Button>
        </Link> */}
      </CardActions>
    </Card>
  );
}
