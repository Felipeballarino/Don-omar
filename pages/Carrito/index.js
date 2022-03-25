
import { useSelector } from "react-redux";
import styles from "./carrito.module.css";


const Carrito = () => {
  const state = useSelector(state => state)
  return (
    <>
      <div className={styles.conteiner}>
        <div className={styles.contCarro}>

        </div>
        {/* {console.log(state)}
        {/* <ul >
          {state && state.map(d => (
            <li>{d.nombre}</li>
          ))}
        </ul> */} 
      </div>
    </>
  );
};

export default Carrito;
