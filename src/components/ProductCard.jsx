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
    <Card sx={{ maxWidth: 280, maxHeight: 750 }}>
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
          <hr />
          <br />
          {props.item.price} сом
        </Typography>
      </CardContent>
      <CardActions>
        {checkProductInCart(props.item.id) ? (
          <Button
            onClick={() => deleteProductFromCart(props.item.id)}
            size="small"
            variant="contained"
            color="error"
            sx={{ marginLeft: "15px" }}
          >
            <AddShoppingCartRounded />
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(props.item)}
            size="small"
            variant="outlined"
            sx={{ marginLeft: "15px" }}
            color="error"
          >
            <AddShoppingCartRounded />
          </Button>
        )}

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
