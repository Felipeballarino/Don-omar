import style from "./head.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";

const arr_nav = [
  { titulo: "Tienda Online", url: "/Client/Tienda", icon: 'bx bxs-store-alt' },
  { titulo: "Recetas", url: "/Client/Recetas", icon: 'bx bxs-slideshow' },
  { titulo: "Carnes de Campo", url: "/Client/carnes", icon: 'bx bx-health' },
];
let active_nav = 0;

const Head = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const state = useSelector(state => state.carrito)

  const goHome = () => {
    router.push("/");
  };




  return (
    <>
      <div className={style.contenedor}>
        <div className={style.izquierda}>
          <div className={style.img}>
            <Image
              src="/logotipo-donomar.png"
              alt="logo"
              onClick={goHome}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <ul className={style.contenedorLeft}>
            {arr_nav.map((item, index) => (
              <li className={style.contMenu} key={index}>
                <Link href={item.url}>
                  <a
                    className={active_nav === index ? "style.active " : style.inactive}
                    onClick={() => (active_nav = index)}
                  >
                    {item.titulo}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.contCart}>
          <Link href="/Client/Carrito" className={style.btnCart}>
            <span className="material-icons"> shopping_cart </span>
          </Link>
          {state.length  ?
            <div className={style.cantidadCart}>
              <p>{state.length}</p>
            </div> : ""}
        </div>

        {/* MENU HAMBURGUESA */}

        <button className={style.hambur} onClick={() => setOpen(!open)}>
          {state.length && !open ?
            <div className={style.cantidadMenu}>
              <p>{state.length}</p>
            </div> : ""}
            <div className={style.hamburguesa}>
              <span className={open ? style.cerrado : style.creado}></span>
            </div>
          {/* <i className='bx bx-menu'></i> */}
        </button>
        <div className={open ? style.menuDesplegable : style.menuDesplegableNone}>
          <ul className={style.contHambur}>
            {arr_nav.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <a
                    className={active_nav === index ? style.active  : style.inactive}
                    onClick={() => setOpen(!open)}
                  >
                    <i className={item.icon}></i>
                    {item.titulo}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/Client/Carrito" className={style.btnCartMov}>
                <a onClick={() => setOpen(!open)}>
                  <span className="material-icons"> shopping_cart </span>
                  Carrito
                </a>
              </Link>
                  {state.length ?
                    <div className={style.cantidadCart}>
                      <p>{state.length}</p>
                    </div> : ""}
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Head;
