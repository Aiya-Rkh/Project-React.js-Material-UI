import { DownloadDone } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";

const FiltersBlock = () => {
  // !search - функция спец для фильтрации
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [category, setCategory] = useState(search.get("category") || "");

  // ! эта функция
  const filterProducts = (key, value) => {
    console.dir(value);
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setCategory(search.get("category") || "");
    getProducts();
  };

  // !сбрасывает фильтрацию
  const resetFilter = () => {
    navigate("/");
    setSearchValue("");
    getProducts();
  };

  return (
    <>
      <div className="category">
        {/* Фильтрацию по Li */}
        <ul value={category}>
          <li className="li" onClick={resetFilter}>
            Все
          </li>
          <li
            onClick={(e) => filterProducts("category", "clasik")}
            name="clasik"
          >
            Классические
          </li>
          <li onClick={(e) => filterProducts("category", "hot")} name="hot">
            Запеченные
          </li>
          <li onClick={(e) => filterProducts("category", "sets")} name="sets">
            Сеты
          </li>
        </ul>
      </div>
      {/* filters block */}
      <div className="filters-block">
        <div>
          <TextField
            value={searchValue}
            onChange={(e) => filterProducts("q", e.target.value)}
            variant="outlined"
            label="Поиск по ингредиентам"
            color="error"
          />
        </div>
        <div>
          <Button
            style={{ marginTop: "10px" }}
            onClick={resetFilter}
            variant="outlined"
            color="error"
          >
            <DownloadDone />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FiltersBlock;
