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
  // const [priceValue1, setPriceValue1] = useState(search.get("price_gte") || "");

  // ! эта функция
  const filterProducts = (key, value) => {
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
        {/* Сдлеать фильрацию по Li */}
        <ul
          value={category}
          onClick={(e) => filterProducts("category", e.target.value)}
        >
          <li className="li">Все</li>
          <li value="clasik">Классические</li>
          <li value="hot">Запеченные</li>
          <li value="sets">Сеты</li>
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
          {/* !input по категории */}
          <FormControl color="error" fullWidth>
            <InputLabel id="color-select">Сорт</InputLabel>
            <Select
              value={category}
              onChange={(e) => filterProducts("category", e.target.value)}
              labelId="color-select"
              label="Выберите"
            >
              <MenuItem value="clasik">Классические</MenuItem>
              <MenuItem value="hot">Запеченные</MenuItem>
              <MenuItem value="sets">Сеты</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* Кнопка */}
        <div>
          <Button onClick={resetFilter} variant="outlined" color="error">
            Сбросить
          </Button>
        </div>
      </div>
    </>
  );
};

export default FiltersBlock;
