
import { useSelector } from "react-redux";
import styles from "./carrito.module.css";
import { useDispatch } from 'react-redux';
import { deleteCart } from "../../Actions";
import Boton from "../../Components/Button";



const Carrito = () => {
  const state = useSelector(state => state.carrito)
  const dispatch = useDispatch()

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
            {state && state.map((d, i) => (
              <ul className={styles.unidades} key={i}>
                <li className={styles.nombreImg}><img src={d.img} alt="img" className={styles.imagen}/> {d.nombre}</li>
                <li className={styles.cantidad}>{d.count} Kg</li>
                <li className={styles.precio}>${d.precio}</li>
                <li className={styles.eliminar}>
                  <button onClick={console.log('hoal')} >
                    <span className="material-icons">close</span>
                  </button>
                </li>
              </ul>
            ))}
          </div>
          <div className={styles.footer}>
            <span>El total del carrito es una aproximacion, una vez armado el pedido, te enviaremos el peso y precio correspondiente.</span>
            <div className={styles.total}>
              <h1>Total $1500</h1>
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


{/* <ul >

</ul> */}