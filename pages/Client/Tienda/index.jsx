import styles from "./tienda.module.css";
import Head from "next/head";
import Card from "../../../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCateg, consumirJSON } from "../../../Redux/Actions";
import { useEffect } from "react";
import Paginado from "../../../Components/Paginado";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
}));

const arr_categs = [
  { nombre: "Todas", icon: "" },
  { nombre: "Cortes de Vaca", icon: "" },
  { nombre: "Cortes de Cerdo", icon: "" },
  { nombre: "Ofertas", icon: "" },
  { nombre: "Varios", icon: "" }
];

let nav_arr = 0;

const Tienda = () => {
  const state = useSelector((state) => state.filtrado);
  const state_carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  const classes = useStyles();

  //----------PAGINADO-------------
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, _setProductPerPage] = useState(6);
  const indexOfLastProduct = currentPage * productPerPage; // 6
  const indexOfFirstProduct = indexOfLastProduct - productPerPage; //0
  const currentProduct = state.slice(indexOfFirstProduct, indexOfLastProduct);
  const final = state.length / 6;
  const [filtro, setFiltro] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const navegar = (data) => {
    if (data == "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  //------------------------------------


  useEffect(async () => {
    if (!state.length) {
      dispatch(consumirJSON());
    }
    dispatch(filterCateg("Todas"));
  }, [dispatch]);


  //----------FILTROS-------------
  const handlerFilter = (categ, index) => {
    nav_arr = index;
    dispatch(filterCateg(categ));
    setCurrentPage(1);
  };
  const changeFilter = (e) => {
    e.preventDefault();
    setFiltro(e.target.value);
    dispatch(filterCateg(e.target.value));
    setFiltro("");
    setCurrentPage(1);
  };
  //------------------------------------
  const checkProduct = (producto) => {
    return state_carrito.find((e) => e.id === producto.id) ? true : false;
  };




  

  return (
    <>
      <Head>
        <title>Don Omar | Tienda Online</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.categorias}>
          {/* Filtrado Desktop */}
          <h1>CATEGORÍAS </h1>
          <ul>
            {arr_categs.map((item, index) => (
              <li
                key={index}
                onClick={() => handlerFilter(item.nombre, index)}
                className={nav_arr === index ? styles.active : ""}
              >
                <span>{item.nombre}</span>
                <span className="material-icons icon"> arrow_forward_ios </span>
              </li>
            ))}
          </ul>
          {/* Filtrado Mobile */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Categorías</InputLabel>
            <Select defaultValue="Todas" id="grouped-select"  onChange={changeFilter}  className={styles.select}> 
              {arr_categs.map((item, index) => (
              <MenuItem
                key={index}
                value={item.nombre}
              >
                {item.nombre}
              </MenuItem>
            ))}
            </Select>
          </FormControl>  
        </div>
        
        <div className={styles.contRight}>
          <div className={styles.contCard}>
            {currentProduct
              ? currentProduct.map((item, index) => (
                  <Card
                    item={item}
                    index={index}
                    key={index}
                    check={checkProduct(item)}
                  />
                ))
              : ""}
          </div>
          <div className={styles.contPag}>
            {currentPage != 1 ? (
              <button onClick={() => navegar("pre")}>
                <span className="material-icons">chevron_left</span>
              </button>
            ) : (
              ""
            )}
            <Paginado
              productPerPage={productPerPage}
              allProduct={state.length}
              paginado={paginado}
              current={currentPage}
            ></Paginado>
            {currentPage < final ? (
              <button onClick={() => navegar("next")}>
                <span className="material-icons">keyboard_arrow_right</span>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tienda;
