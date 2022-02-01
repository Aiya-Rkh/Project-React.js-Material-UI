import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { API } from "../helpers/const";

export const ClientContext = React.createContext();

const INIT_STATE = {
  products: null,
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  cart: null,
  detail: null,
};
// !reducer-говорит -ок,сделал!
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_FORM_CART":
      return { ...state, cartCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CET_DETAIL":
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};

// ! action-гооврим сделай это-!
const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const response = await axios(`${API}/${window.location.search}`);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // ! PAGINATION

  // ! сколько страниц должно быть на 1 странице
  const productsPerPage = 9;
  // !
  const [currentPage, setCurrentPage] = useState(1);
  // ! итоговый результат с пустом массиве
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (state.products) {
      setPosts(state.products);
    }
  }, [state.products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProductsCount = posts.length;
  console.log(currentProducts);

  // ! CART -КОРЗИНА

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let productCart = {
      product,
      count: 1,
      subPrice: product.price,
    };
    cart.products.push(productCart);
    cart.totalPrice = cart.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    let action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }
    let check = cart.products.find((item) => {
      return item.product.id === id;
    });
    if (!check) {
      return false;
    } else {
      return true;
    }
  };
  // !удаление с корзины

  const deleteProductFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    // !перерасчет totalPrice
    cart.totalPrice = cart.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    let action = {
      type: "DELETE_PRODUCT_FORM_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };
  // ! стягивает данные
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
        return item;
      } else {
        return item;
      }
    });
    cart.totalPrice = cart.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // ! bot

  const getProductsToBot = (info, cart) => {
    axios.get(
      "https://api.telegram.org/bot5197737560:AAEJ-XlDOdj6oJ9bbDKLKgDh9Vn0Qx6Ip6A/sendMessage",
      {
        params: {
          parse_mode: "HTML",
          text: ` Заказы 
          Ф.И.О. ${info.name}
          Почта: ${info.email}
          Адрес: ${info.address}
          Город: ${info.city}
          ${cart.products.reduce(
            (item, cur) =>
              item +
              `Категория: ${cur.product.category}, Цена:${cur.product.price},id:${cur.product.id}\n`,
            ""
          )}\nОбщая сумма: ${cart.totalPrice}`,

          chat_id: "868943207",
        },
      }
    );
  };

  // !DETAIL PAGE

  const getDetail = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "CET_DETAIL",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //   !Уточнить products как передается
    <ClientContext.Provider
      value={{
        getProducts,
        setCurrentPage,
        addProductToCart,
        deleteProductFromCart,
        getProductsToBot,
        getCart,
        getDetail,
        changeCount,
        checkProductInCart,
        totalProductsCount,
        productsPerPage,
        currentPage,
        detail: state.detail,
        cart: state.cart,
        cartCount: state.cartCount,
        products: currentProducts,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
