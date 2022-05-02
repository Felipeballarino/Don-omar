import React, { useEffect, useState } from "react";
import styles from "./cardInfo.module.css"
import Boton from "../../../Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addCard, deleteCart, filterCateg } from "../../../Redux/Actions";
import axios from 'axios'
import Card from "../../../Components/Card";
// import productos from '../../api/productos.json'



const Info = (props) => {
    const dispatch = useDispatch()
    const item = props.dataProduct
    const state_carrito = useSelector((state) => state.carrito);

    const check = state_carrito.find((e) => e.id == props.id) ? true : false;

    const [contenido, setContenido] = useState({
        id: item.id,
        img: item.img,
        nombre: item.nombre,
        precio: item.precio,
        count: item.count,
        categoria: item.categoria,
    })





    const checkProduct = (producto) => {
        return state_carrito.find((e) => e.id === producto.id) ? true : false;
    };

    const agregarCarrito = (contenido) => {
        dispatch(addCard(contenido))
    }

    const eliminarCarrito = (id) => {
        dispatch(deleteCart(id))
    }

    const editCount = (type) => {
        if (type == "rest") {
            setContenido({
                ...contenido,
                count: contenido.count - 1
            })
        } else {
            setContenido({
                ...contenido,
                count: contenido.count + 1
            })
        }
    }

    return (
        <>
            {contenido ?
                <div className={styles.contendor}>
                    <div className={styles.card}>
                        <div className={styles.cardLeft}>
                            <img src="/media/Photo.jpg" alt="as" />
                        </div>
                        <div className={styles.cardRigth}>
                            <h1>{contenido.nombre}</h1>
                            <div className={styles.precio}>
                                <p>
                                    <span>$ {contenido.precio}</span> x un
                                </p>
                                <p>Precio aaproximado</p>
                            </div>
                            <div className={styles.cantidad}>
                                <span onClick={() => editCount("rest")}> - </span>
                                <span> {contenido.count}</span>
                                <span onClick={() => editCount("sum")}> + </span>
                            </div>
                            <p className={styles.unidades}>La unidad de este producto oscila entre 0,9 y 1,2 Kg.</p>
                            <div className={styles.boton}>
                                {
                                    check ?
                                        <Boton >
                                            <div onClick={() => eliminarCarrito(contenido.id)} className={styles.carritos}>
                                                <span className="material-icons" >remove_shopping_cart</span>Eliminar del carrito
                                            </div>
                                        </Boton>
                                        :
                                        <Boton >
                                            <div onClick={() => agregarCarrito(contenido)} className={styles.carritos}>
                                                <span className="material-icons" > shopping_cart </span>Añadir al carrito
                                            </div>
                                        </Boton>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                ""
            }
            <div className={styles.contenedorSugerencias}>
                <h1>Productos Relacionados</h1>
                <div className={styles.relacionados} >
                    {props.prodsRelac
                        ? props.prodsRelac.map((item, index) => (
                            index < 4 ?
                                <Card
                                    className={styles.cardRelacion}
                                    item={item}
                                    index={index}
                                    key={index}
                                    check={checkProduct(item)}
                                /> : ""
                        ))
                        : ""}
                </div>
            </div>

        </>
    );
}

export default Info;


export async function getServerSideProps(context) {
    const { req, res } = context;
    const id = context.query.prodId
    const datos = await axios.get('http://localhost:3000/api/hello');
    const datosResp = datos.data
    const productoid = datosResp.find(e => e.id == id)
    const prodsRelac = datosResp.filter(c => c.categoria === productoid.categoria)
    return {
        props: {
            id: id,
            productos: datosResp,
            dataProduct: datosResp.find(e => e.id == id),
            prodsRelac
        }
    };
}