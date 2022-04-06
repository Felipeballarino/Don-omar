
import { useSelector } from "react-redux";
import styles from "./carrito.module.css";
import { useDispatch } from 'react-redux';
import { deleteCart, deleteStado } from "../../../Redux/Actions";
import Boton from "../../../Components/Button";
import { useState, useEffect } from "react";



const Carrito = () => {
  const state = useSelector(state => state.carrito) 
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const precioTotal = 0

  useEffect(() => {
    state.map(e=>{
      precioTotal =precioTotal + (e.precio * e.count)
    });
    setTotal(
      precioTotal
      ), [dispatch]
})

const eliminarCart = (id) => {
  dispatch(deleteCart(id))
}

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
          {state.length ? state.map((d, i) => (
            <ul className={styles.unidades} key={i}>
              <li className={styles.nombreImg}><img src={d.img} alt="img" className={styles.imagen} /> {d.nombre}</li>
              <li className={styles.cantidad}>{d.count} Kg</li>
              <li className={styles.precio}>${d.precio}</li>
              <li className={styles.eliminar}>
                <button onClick={() => eliminarCart(d.id)} >
                  <span className="material-icons">close</span>
                </button>
              </li>
            </ul>
          )) :
            <span>El carrito de compras esta vacio</span>
          }
        </div>
        <div className={styles.footer}>
          <span>El total del carrito es una aproximacion, una vez armado el pedido, te enviaremos el peso y precio correspondiente.</span>
          <div className={styles.total}>
            <h1>Total ${total} </h1>
            <p>Compra minima $3000*</p>
          </div>
          <div className={styles.boton}>
            <Boton>
              <span className="material-icons">
                whatsapp
              </span>
              <p>Enviar pedido</p> </Boton>
          </div>
        </div>
      </div>

    </div>
  </>
);
};

export default Carrito;


