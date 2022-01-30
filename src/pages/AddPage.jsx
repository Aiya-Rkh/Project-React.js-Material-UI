import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { AdminContext } from "../context/AdminProvider";
import { ToastContainer } from "react-toastify";

const AddPage = () => {
  const { addProduct } = React.useContext(AdminContext);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    //   ! Проверка на пустоту
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля!");
        return;
      }
    }
    addProduct(newProduct);
    //   !очищаем инпуты
    setNewProduct({
      name: "",
      price: "",
      description: "",
      image: "",
    });
  };
  return (
    <div className="add-edit-page">
      <Container
        sx={{
          bgcolor: "lightblue",
          marginTop: "130px",
          borderRadius: 5,
          width: "700px",
          padding: "20px",
        }}
      >
        <h3
          style={{ color: "black", marginLeft: "220px", marginBottom: "15px" }}
        >
          Добавить суши
        </h3>
        <form onSubmit={handleSubmit}>
          <TextField
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            label="Название суши"
            variant="outlined"
            color="warning"
          />

          <TextField
            value={newProduct.price}
            onChange={(e) => {
              if (!Number.isInteger(+e.target.value)) return;
              setNewProduct({
                ...newProduct,
                price: +e.target.value,
              });
            }}
            label="Цена за ед. суши"
            variant="outlined"
            color="warning"
          />

          <TextField
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            label="Состав суши"
            variant="outlined"
            color="warning"
          />

          <TextField
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            label="Картинка"
            variant="outlined"
            color="warning"
          />

          <Button
            color="error"
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "darkred",
              width: "200px",
              borderRadius: 3,
              marginLeft: "35%",
            }}
          >
            Добавить
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddPage;
