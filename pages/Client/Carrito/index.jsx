import { useSelector } from "react-redux";
import styles from "./carrito.module.css";
import { useDispatch } from "react-redux";
import { deleteCart, deleteStado } from "../../../Redux/Actions";
import { useState, useEffect } from "react";
import Form from "../../../Components/Form/index";

import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Carrito = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const state = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const precioTotal = 0;

  useEffect(async () => {
    const session1 = await fetch(`/api/user/login?path=GET_USER`);
    if (session1) {
      !login ? setUser(await session1.json()) : "";
      user ? setLogin(true) : "";
    }
    state.map((e) => {
      precioTotal = precioTotal + e.precio * e.count;
    });
    setTotal(precioTotal), [dispatch];
  });

  const eliminarCart = (id) => {
    dispatch(deleteCart(id));
  };

  const pedido = `
  Hola mi pedido es:
  ${state.map((d, i) => `${d.count} Kg de ${d.nombre} `)} `;

  const enviarPedido = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=543536560998&text=${pedido}`,
      "_system"
    );
  };

  return (
    <>
      <div className={styles.conteiner}>
        <div className={styles.contCarro}>
          <div>
            <ul className={styles.headCart}>
              <li className={styles.productos}>Productos</li>
              <li>Cantidad</li>
              <li>Precio</li>
              <li>Eliminar</li>
            </ul>
            {state.length ? (
              state.map((d, i) => (
                <ul className={styles.unidades} key={i}>
                  <li className={styles.nombreImg}>
                    <img src={d.img} alt="img" className={styles.imagen} />{" "}
                    {d.nombre}
                  </li>
                  <li className={styles.cantidad}>{d.count} Kg</li>
                  <li className={styles.precio}>${d.precio}</li>
                  <li className={styles.eliminar}>
                    <button onClick={() => eliminarCart(d.id)}>
                      <span className="material-icons">close</span>
                    </button>
                  </li>
                </ul>
              ))
            ) : (
              <span>El carrito de compras esta vacio</span>
            )}
          </div>
          <div className={styles.footer}>
            <span>
              El total del carrito es una aproximacion, una vez armado el
              pedido, te enviaremos el peso y precio correspondiente.
            </span>
            <div className={styles.total}>
              <h1>Total ${total} </h1>
              <p>Compra minima $3000*</p>
            </div>
            <div className={styles.boton}>
              {login ? (
                <button onClick={handleOpen} className={styles.enviar}>
                  <span className="material-icons">whatsapp</span>
                  <p>Enviar pedido</p>
                </button>
              ) : (
                <Form i={0}></Form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.contenedor}>
          <div className={styles.close} onClick={handleClose}>
            <span className="material-icons">close</span>
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={styles.titulo}
          >
            CONFIRMAR PEDIDO
          </Typography>
          <div className={styles.terminarPedido}>
            {state.length ? (
              state.map((d, i) => (
                <ul className={styles.unidades} key={i}>
                  <li className={styles.nombreImg}>
                    <img src={d.img} alt="img" className={styles.imagen} />{" "}
                    {d.nombre}
                  </li>
                  <li className={styles.cantidad}>{d.count} Kg</li>
                  <li className={styles.precio}>${d.precio}</li>
                  <li className={styles.eliminarEnvio}>
                    <button onClick={() => eliminarCart(d.id)}>
                      <i class="bx bxs-trash"></i>
                    </button>
                  </li>
                </ul>
              ))
            ) : (
              <span>Aun no hay productos en tu carrito</span>
            )}
            {state.length ? (
              <div>
                <div className={styles.total}>
                  <h1>Total ${total}</h1>
                </div>
                <button
                  className={styles.enviar}
                  onClick={() => {
                    enviarPedido();
                  }}
                >
                  Enviar Pedido
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Carrito;
