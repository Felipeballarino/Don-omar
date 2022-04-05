import style from "./head.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";

const arr_nav = [
  { titulo: "Tienda Online", url: "/Client/Tienda", icon: "" },
  { titulo: "Recetas", url: "/Client/Recetas", icon: "" },
  { titulo: "Carnes de Campo", url: "/Client/carnes", icon: "" },
];
let active_nav = 0;

const Head = () => {
  const router = useRouter();
  const state = useSelector(state => state.carrito)

  const goHome = () => {
    router.push("/");
  };

  


  return (
    <>
      <div className={style.contenedor}>
    {state.length?
    <div className={style.cantidadCart}>
      <p>{state.length}</p>
    </div> : ""}
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
                  className={active_nav === index ? "style.active ": style.inactive}
                  onClick={() => (active_nav = index)}
                >
                  {item.titulo}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.contCart}>
          <Link href="/Client/Carrito" className={style.btnCart}>
            <span className="material-icons"> shopping_cart </span>
          </Link>   
        </div>
      </div>
    </>
  );
};

export default Head;
