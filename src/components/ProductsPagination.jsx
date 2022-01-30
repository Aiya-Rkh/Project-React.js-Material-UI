import { Pagination } from "@mui/material";
import React, { useContext } from "react";
import { ClientContext } from "../context/ClientProvider";

const ProductsPagination = () => {
  const { productsPerPage, totalProductsCount, setCurrentPage } =
    useContext(ClientContext);
  const count = Math.ceil(totalProductsCount / productsPerPage);
  console.log(count);
  return (
    <div className="pagination">
      <Pagination
        onChange={(_, value) => setCurrentPage(value)}
        count={count}
        variant="outlined"
        shape="rounded"
        sx={{ color: "red", marginBottom: "35px" }}
      />
    </div>
  );
};

export default ProductsPagination;
