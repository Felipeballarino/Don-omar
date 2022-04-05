import styles from './card.module.css'
import React, { useState } from "react";
import Image from "next/image";
import { addCard, addStado, deleteCart, deleteStado, changeCount } from '../../Redux/Actions';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';


const Card = ({ item }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const state = useSelector(state => state.carrito)
  const [contenido, setContenido] = useState({
    id: item.id,
    img: item.img,
    nombre: item.nombre,
    precio: item.precio,
    count: item.count,
    categoria: item.categoria,
    addCard: item.addCard
  })


  const agregarCarrito = (id) => {
    dispatch(addStado(id))
    dispatch(addCard(contenido))
  }

  const eliminarCarrito = (id) => {
    dispatch(deleteStado(id))
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
      {console.log(state.map(e=> e.id == contenido.id))}
      <div className={styles.card}>
        <button className={styles.carro} >
          {
            contenido.addCard ?
              <span className="material-icons" title='Eliminar del carrito' onClick={() => eliminarCarrito(contenido.id)}>
                remove_shopping_cart
              </span>
              :
              <span className="material-icons" title='Agregar al carrito' onClick={() => agregarCarrito(contenido.id)}>
                shopping_cart
              </span >
          }

        </button>
        <Image
          onClick={() => { router.push(`/Client/Producto/${item.id}`) }}
          src={contenido.img}
          alt={item}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority="false"
        />
        <div className={styles.infoCard}>
          <h3 onClick={() => { router.push(`/Client/Producto/${item.id}`) }}>{contenido.nombre}</h3>
          <div className={styles.precioCont}>
            <div className={styles.precio}>
              <p>
                <span>$ {contenido.precio}</span> x un
              </p>
              <p>Precio Aproximado</p>
            </div>
            <div className={styles.cantidad}>
              <span onClick={() => editCount("rest")} > - </span>
              <span> {contenido.count}</span>
              <span onClick={() => editCount("sum")}> + </span>
            </div>
          </div>
          <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
        </div>
      </div>
    </>
  );
}





export default Card;

