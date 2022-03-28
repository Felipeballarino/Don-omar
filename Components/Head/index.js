import style from "./head.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const arr_nav = [
  { titulo: "Tienda Online", url: "/Tienda", icon: "" },
  { titulo: "Recetas", url: "/contacto", icon: "" },
  { titulo: "Carnes de Campo", url: "/carnes", icon: "" },
];
let active_nav = 0;

const Head = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  


  return (
    <>
      <div className={style.contenedor}>
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
                  className={`nav-link ${active_nav === index ? "active" : ""}`}
                  onClick={() => (active_nav = index)}
                >
                  {item.titulo}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.contCart}>
          <Link href="/Carrito" className={style.btnCart}>
            <span className="material-icons"> shopping_cart </span>
          </Link>   
        </div>
      </div>
    </>
  );
};

export default Head;
