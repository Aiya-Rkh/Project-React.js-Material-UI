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
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../context/AdminProvider";

const EditPage = () => {
  // ! получает Id конкретного продукта чрз params
  const params = useParams();
  const { getProductToEdit, productToEdit, saveEditedProduct } =
    useContext(AdminContext);
  const [productEdit, setProductEdit] = useState(productToEdit);

  const navigate = useNavigate();

  useEffect(() => {
    setProductEdit(productToEdit);
  }, [productToEdit]);

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    // !проверка на пустоту
    for (const key in productEdit) {
      if (!productEdit[key]) {
        alert("Заполните поля");
        return;
      }
    }
    saveEditedProduct(productEdit);
    navigate("/admin-panel");
  };

  if (!productEdit) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="add-edit-page">
      <Container
        sx={{
          bgcolor: "lightblue",
          marginTop: "150px",
          width: "700px",
          borderRadius: 5,
          padding: "20px",
        }}
      >
        <h2 style={{ marginLeft: "220px", color: "darkred" }}>Редактировать</h2>
        <form onSubmit={handlesubmit}>
          <TextField
            value={productEdit.name}
            onChange={(e) =>
              setProductEdit({ ...productEdit, name: e.target.value })
            }
            label="Название суши"
            variant="outlined"
            color="warning"
          ></TextField>

          <TextField
            value={productEdit.price}
            onChange={(e) =>
              setProductEdit({ ...productEdit, price: +e.target.value })
            }
            label="Цена за ед.суши"
            variant="outlined"
            type="number"
            color="warning"
          ></TextField>
          <TextField
            value={productEdit.desciption}
            onChange={(e) =>
              setProductEdit({ ...productEdit, description: e.target.value })
            }
            label="Состав суши"
            variant="outlined"
            color="warning"
          ></TextField>
          <TextField
            value={productEdit.image}
            onChange={(e) =>
              setProductEdit({ ...productEdit, image: e.target.value })
            }
            label="Картинка"
            variant="outlined"
            color="warning"
          ></TextField>

          <Button
            variant="contained"
            type="submit"
            color="error"
            sx={{
              bgcolor: "darkred",
              width: "270px",
              height: "45px",
              marginLeft: "29%",

              borderRadius: 5,
            }}
          >
            Сохранить изменения
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditPage;
