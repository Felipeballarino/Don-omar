import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./cardInfo.module.css"
import Boton from "../../../Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { getProductForId } from '../../../Redux/Actions/index'



const Info = () => {
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductForId(router.query.prodId))
    }, [])

    const state = useSelector(state => state.detalles)

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
            {state[0]?  
                <div className={styles.contendor}>
                    <div className={styles.card}>
                        <div className={styles.cardLeft}>
                            <img src="/media/Photo.jpg" alt="as" />
                        </div>
                        <div className={styles.cardRigth}>
                            <h1>{state[0].nombre}</h1>
                            <div className={styles.precio}>
                                <p>
                                    <span>$ {state[0].precio}</span> x un
                                </p>
                                <p>Precio aaproximado</p>
                            </div>
                            <div className={styles.cantidad}>
                                <span onClick={decrementCount}> - </span>
                                <span> {state[0].count}</span>
                                <span onClick={incrementCount}> + </span>
                            </div>
                            <p className={styles.unidades}>La unidad de este producto oscila entre 0,9 y 1,2 Kg.</p>
                            <div className={styles.boton}>
                                <Boton><span className="material-icons"> shopping_cart </span>Añadir al carrito</Boton>
                            </div>
                        </div>
                    </div>
                </div>
            :
            ""
            }
        </>
    );
}

export default Info;