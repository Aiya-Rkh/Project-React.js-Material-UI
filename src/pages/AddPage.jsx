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
        style={{
          backgroundColor: "snow",
          // display: "flex",
          // justifyContent: "center",
          marginTop: "130px",
          borderRadius: "5px",
          width: "700px",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{
              color: "black",
              textAlign: "center",
              marginBottom: "15px",
              width: "600px",
            }}
          >
            Добавить суши:
          </h2>
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
              marginLeft: "28%",
              width: "270px",
              borderRadius: 5,
              // display: "felx",
              // justifyContent: "center",
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
