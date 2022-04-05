import styles from "./tienda.module.css";
import Head from "next/head";
import Card from '../../../Components/Card'
import { useDispatch, useSelector } from 'react-redux';
import { filterCateg, consumirJSON } from "../../../Redux/Actions";
import { useEffect } from "react";
import Paginado from "../../../Components/Paginado";
import { useState } from "react";



const arr_categs = [
  { nombre: "Todas", icon: "" },
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

let nav_arr = 0

const Tienda = () => {
  const state = useSelector(state => state.filtrado)
  const state_carrito = useSelector(state => state.carrito);
  const dispatch = useDispatch()

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, _setProductPerPage] = useState(6)
  const indexOfLastProduct = currentPage * productPerPage;// 6
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;//0
  const currentProduct = state.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginado = (pageNumber)=>{
    setCurrentPage (pageNumber) 
}


  const handlerFilter = (categ, index) => {
    nav_arr = index
    dispatch(filterCateg(categ, index))
  }

  useEffect(() => {
    if (!state.length) {
      dispatch(consumirJSON())
    }
  }, [dispatch])

  const checkProduct = (producto) => {
    return state_carrito.find(e => e.id === producto.id) ? true : false;
  }

  return (
    <>
      <Head>
        <title>Don Omar | Tienda Online</title>
      </Head>
      <div className={styles.container}>
        <Paginado
          productPerPage={productPerPage}
          allProduct={state.length}
          paginado={paginado}></Paginado>
        <div className={styles.categorias}>
          <h1>Categorias </h1>
          <ul>
            {arr_categs.map((item, index) => (
              <li key={index} onClick={() => handlerFilter(item.nombre, index)} className={nav_arr === index ? styles.active : ""}>
                <span>{item.nombre}</span>
                <span className="material-icons icon"> arrow_forward_ios </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contCard}>
          {currentProduct ? currentProduct.map((item, index) => (
            <Card item={item} index={index} key={index} check={checkProduct(item)} />
          )):""}
        </div>
      </div>
    </>
  );
};


export default Tienda;