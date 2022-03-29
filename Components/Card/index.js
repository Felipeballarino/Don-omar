import styles from './card.module.css'
import React, { useState } from "react";
import Image from "next/image";
import { addCard } from '../../Actions';

import { useDispatch, useSelector } from 'react-redux';


const Card = ({item}) => {
  const dispatch = useDispatch()
  

  const handlerSubmit = () => {
    // setInput({
    //   ...input,
    //   addCard: !input.addCard
    // })
    dispatch(addCard(item))
  }

  const incrementCount = () => {
    setInput({
      ...input,
      count: input.count + 1
    })
  }
  const decrementCount = () => {
    setInput({
      ...input,
      count: input.count - 1
    })
  }



  return (
    <>
      <div className={styles.card}>
        <button className={styles.carro} onClick={handlerSubmit}>
          {
            item.addCard ?
              <span className="material-icons" title='Eliminar del carrito'>
                remove_shopping_cart
              </span>
              :
              <span className="material-icons" title='Agregar al carrito'>
                shopping_cart
              </span>
          }

        </button>   
        <Image
          src={item.img}
          alt={item}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority="false"
        />
        <div className={styles.infoCard}>
          <h3>{item.nombre}</h3>
          <div className={styles.precioCont}>
            <div className={styles.precio}>
              <p>
                <span>$ {item.precio}</span> x un
              </p>
              <p>Precio Aproximado</p>
            </div>
            <div className={styles.cantidad}>
              <span onClick={decrementCount}> - </span>
              <span> {item.count}</span>
              <span onClick={incrementCount}> + </span>
            </div>
          </div>
          <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
        </div>
      </div>
    </>
  );
}





export default Card;

