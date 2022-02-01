import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../context/AdminProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  DeleteForeverRounded,
  ModeEditOutlineRounded,
} from "@mui/icons-material";

export default function AdminTable() {
  const { getProduct, products, deleteProduct } =
    React.useContext(AdminContext);

  React.useEffect(() => {
    getProduct();
  }, []);

  if (!products) {
    return <h2> Loading</h2>;
  }

  return (
    <TableContainer
      component={Paper}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "100px 0",
        borderRadius: 5,
      }}
    >
      <Table sx={{ bgcolor: "snow" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "whitesmoke" }}>
            <TableCell>Название</TableCell>
            <TableCell align="right">Картинка</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Состав</TableCell>
            <TableCell>Изменить</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
                <img width={80} src={item.image} alt="product-img" />
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>

              <TableCell align="right">{item.description}</TableCell>
              <TableCell>
                <Link to={`/admin-panel/edit/${item.id}`}>
                  <Button variant="outlined" color="warning">
                    <ModeEditOutlineRounded />
                  </Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => deleteProduct(item.id)}
                >
                  <DeleteForeverRounded />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
