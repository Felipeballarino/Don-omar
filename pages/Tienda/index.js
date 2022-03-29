import styles from "./tienda.module.css";
import Head from "next/head";
import Card from '../../Components/Card'
import {  useSelector } from 'react-redux';
import Link from "next/link";
import { useRouter } from "next/router";




const arr_categs = [
  { nombre: "Vacuno", icon: "" },
  { nombre: "Cerdo", icon: "" },
  { nombre: "Pollo", icon: "" },
  { nombre: "Achuras", icon: "" },
  { nombre: "Embutidos", icon: "" },
  { nombre: "Fiambres", icon: "" },
  { nombre: "Corte x unidad", icon: "" },
  { nombre: "Elaborados", icon: "" },
  { nombre: "Cordero", icon: "" },
  { nombre: "Otros", icon: "" },
];


const Tienda = () => {
  const state = useSelector(state => state.productos)


  const router = useRouter()


  return (
    <>
  
      <Head>
        <title>Don Omar | Tienda Online</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.categorias}>
          <h1>Categorias </h1>
          <ul>
            {arr_categs.map((item, index) => (
              <li key={index}>
                <span>{item.nombre}</span>
                <span className="material-icons icon"> arrow_forward_ios </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contCard}>
          {state.map((item, index) => (
            // <Link href={`/Tienda/${item.id}`}>
            //   <Card item = {item} index={index} key={index} />
            // </Link>
            <div onClick={() =>{router.push(`/Producto/${item.id}`)}}>
              <Card item = {item} index={index} key={index} />
            </div>
    
          ))}
        </div>
      </div>
    </>
  );
};


export default Tienda;
