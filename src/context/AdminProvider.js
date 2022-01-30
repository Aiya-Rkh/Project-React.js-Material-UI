import axios from "axios";
import React from "react";
import { API } from "../helpers/const";
import { toast } from "react-toastify";

export const AdminContext = React.createContext();
// !состояние
const INIT_STATE = {
  products: null,
  productToEdit: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const AdminProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    try {
      // !куда запрос,что отправить!
      await axios.post(API, newProduct);
      toast.success("Успешно добавлено!");
    } catch (error) {
      toast.error("Ошибка!");
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PRODUCT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedProduct = async (productEdit) => {
    try {
      await axios.patch(`${API}/${productEdit.id}`, productEdit);
      // !без перезагрузки стянуть измененные данные
      getProduct();
      toast.success("Изменения сохранены!");
    } catch (error) {
      console.log(error);
      toast.error("Ошибка,попробуйте позже!");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProduct();
      toast.success("Успешно удалено!");
    } catch (error) {
      console.log(error);
      toast.error("Ошибка!");
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addProduct,
        getProduct,
        getProductToEdit,
        saveEditedProduct,
        deleteProduct,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
