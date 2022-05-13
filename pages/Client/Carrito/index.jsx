import { useSelector } from "react-redux";
import styles from "./carrito.module.css";
import { useDispatch } from "react-redux";
import { deleteCart, deleteStado } from "../../../Redux/Actions";
import { useState, useEffect } from "react";
import Form from "../../../Components/Form/index";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
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

  const router = useRouter();

  const state = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const precioTotal = 0;

  const [entrega, setEntrega] = useState({
    horario: "",
    direccion: "",
    comentarios: "",
  });

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

  const Entrega = (e) => {
    e.preventDefault();
    setEntrega({ ...entrega, [e.target.name]: e.target.value });
  };
  const onChange = (e) => {
    e.preventDefault();
    setEntrega({
      ...entrega,
      [e.target.name]: e.target.value,
    });
  };

  const pedido = `
  DATOS:
  Email:${user.email}, 
  Telefono: ${user.telefono},
  Horarios:${entrega.horario},
  Direccion:${entrega.direccion},
  Comentarios:${entrega.comentarios}

  Pedido:
  ${state.map((d, i) => ` ${d.count} Kg de ${d.nombre} `)} 
  `;

  const enviarPedido = () => {
    console.log(pedido);
    Swal.fire({
      icon: "success",
      title: "Su compra esta siendo procesada !",
      showConfirmButton: false,
      timer: 1500
    });
    router.push(`/Client/Tienda`);
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
                  <li className={styles.eliminarMobile}>
                    <button onClick={() => eliminarCart(d.id)}>
                      <span className="material-icons">close</span>
                    </button>
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
              El total del carrito es una aproximación, una vez armado el
              pedido, te enviaremos el peso y precio correspondiente.
            </span>
            <div className={styles.total}>
              <h1>Total ${total} </h1>
              <p>Compra mínima $3000*</p>
            </div>
            <div className={styles.boton}>
              {login ? (
                <button onClick={handleOpen} className={styles.enviar}>
                  <p>Confirmar Compra</p>
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
            DATOS DE ENTREGA
          </Typography>
          <div className={styles.terminarPedido}>
            <form className={styles.formulario}>
              <div className={styles.contInput}>
                <label>Direccion</label>
                <input
                  onChange={onChange}
                  name="direccion"
                  type="text"
                  placeholder="Ej:Magallanes 255"
                />
              </div>
              <div className={styles.contInput}>
                <label>Whatsapp de contacto</label>
                <input
                  onChange={onChange}
                  type="text"
                  placeholder="555555555"
                  defaultValue={user.telefono}
                />
              </div>
              <div className={styles.contInput}>
                <label>Elige un horario</label>
                <div className={styles.botonesHorario}>
                  <button
                    onClick={Entrega}
                    value="09:00 - 12:00"
                    name="horario"
                    className={
                      entrega.horario == "09:00 - 12:00"
                        ? styles.horaActive
                        : ""
                    }
                  >
                    09:00 - 12:00
                  </button>
                  <button
                    onClick={Entrega}
                    value="12:00 - 15:00"
                    name="horario"
                    className={
                      entrega.horario == "12:00 - 15:00"
                        ? styles.horaActive
                        : ""
                    }
                  >
                    12:00 - 15:00
                  </button>
                  <button
                    onClick={Entrega}
                    value="15:00 - 18:00"
                    name="horario"
                    className={
                      entrega.horario == "15:00 - 18:00"
                        ? styles.horaActive
                        : ""
                    }
                  >
                    15:00 - 18:00
                  </button>
                </div>
              </div>
              <div className={styles.contInput}>
                <label>¿Querés decirnos algo más sobre tu pedido?</label>
                <input
                  onChange={onChange}
                  name="comentarios"
                  type="text"
                  placeholder="Ingresa un comentario"
                />
              </div>
            </form>

            {state.length ? (
              <div>
                <button
                  className={styles.enviar}
                  onClick={() => {
                    enviarPedido();
                  }}
                >
                  Confirmar
                </button>
              </div>
            ) : (
              <span>Aun no hay productos en tu carrito</span>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Carrito;

// {state.length ? (
//   state.map((d, i) => (
//     <ul className={styles.unidades} key={i}>
//       <li className={styles.nombreImg}>
//         <img src={d.img} alt="img" className={styles.imagen} />{" "}
//         {d.nombre}
//       </li>
//       <li className={styles.cantidad}>{d.count} Kg</li>
//       <li className={styles.precio}>${d.precio}</li>
//       <li className={styles.eliminarEnvio}>
//         <button onClick={() => eliminarCart(d.id)}>
//           <i class="bx bxs-trash"></i>
//         </button>
//       </li>
//     </ul>
//   ))
// ) : (
//   <span>Aun no hay productos en tu carrito</span>
// )}
