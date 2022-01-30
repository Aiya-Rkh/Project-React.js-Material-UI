import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClientContext } from "../context/ClientProvider";
import { TableFooter, Button } from "@mui/material";

// ! Итоговый бланк покупки

export default function CartTable(props) {
  const { getCart, cart, changeCount, deleteProductFromCart, detail } =
    React.useContext(ClientContext);
  React.useEffect(() => {
    getCart();
  }, []);

  if (!cart) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <TableContainer className="cart" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell align="right">Картинка</TableCell>
              <TableCell align="right">Цена</TableCell>
              <TableCell align="right">Колличество</TableCell>
              <TableCell align="right">Сумма</TableCell>
              {/* <TableCell align="right">Убрать</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.product.name}
                </TableCell>
                <TableCell align="right">
                  {<img width="100" src={item.product.image} alt="" />}
                </TableCell>

                <TableCell align="right">{item.product.price} сом</TableCell>
                <TableCell align="right">
                  {
                    <input
                      min="1"
                      onChange={(e) => {
                        if (e.target.value < 1) {
                          return;
                        }
                        changeCount(e.target.value, item.product.id);
                      }}
                      type="number"
                      value={item.count}
                    />
                  }
                </TableCell>
                <TableCell align="right">{item.subPrice} сом</TableCell>
                {/* <Button onClick={() => deleteProductFromCart(cart.products.id)}> */}
                {/* Убрать
                </Button> */}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <strong style={{ fontSize: 22 }}>Итоговая сумма:</strong>
              </TableCell>
              <TableCell colSpan={1} align="right">
                <strong style={{ fontSize: 22 }}>{cart.totalPrice} сом</strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <div className="order-button">
        <Button variant="outlined" color="secondary">
          Оформить заказ
        </Button>
      </div>
    </>
  );
}
