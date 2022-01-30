import { Image } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import FiltersBlock from "../components/FiltersBlock";
import ProductCard from "../components/ProductCard";
import ProductsPagination from "../components/ProductsPagination";
import { ClientContext } from "../context/ClientProvider";

const MainPage = () => {
  const { getProducts, products } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <div className="firstline">
          <div className="navbar_img">
            <img
              src="https://media.istockphoto.com/photos/pieces-of-delicious-japanese-sushi-frozen-in-the-air-picture-id1136546066?k=20&m=1136546066&s=612x612&w=0&h=h7He0HCRC584bzsRh0mSMRwbBkfAmWNF1Xx28rA9sKY="
              alt=""
            />
          </div>
          <div className="logotip">
            <img
              src="https://mysushi.by/wp-content/uploads/2020/04/logo01.png"
              alt=""
            />
            <h3>Насладитесь японской кухней...</h3>
          </div>
        </div>
        <FiltersBlock />
        {/* тут можно spacing регулировать расстояние между карточками */}
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={8} md={4} item key={item.id}>
              {/* props передаем под ключмо item в productcard*/}
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default MainPage;
