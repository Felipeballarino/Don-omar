import style from './head.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { useHistory } from "react-router-dom";



const arr_nav = [
    { titulo: "Tienda Online", url: "/Tienda", icon: "" },
    { titulo: "Recetas", url: "/contacto", icon: "" },
    { titulo: "Carnes de Campo", url: "/carnes", icon: "" },
];
let active_nav = 0;

const Head = () => {
    const router = useRouter()

    const goHome = () =>{
        router.push('/')
    }

    const goCart = () => {
        router.push('/Carrito')
    }


    return (
        <>
            <div className={style.contenedor}>
            <img src='/logotipo-donomar.png' alt="logo" onClick={goHome} />
                <ul className={style.contenedorLeft}>
                    {arr_nav.map((item, index) => (
                        <li className={style.contMenu} key={index}>
                            <Link href={item.url}>
                                <a
                                    className={`nav-link ${active_nav === index ? "active" : ""
                                        }`}
                                    onClick={() => active_nav = index}
                                >
                                    {item.titulo}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={style.contCart}>
                    <button onClick={goCart}><span className="material-icons"> shopping_cart </span></button>
                </div>
            </div>

        </>
    )

}

export default Head;



//const arr_nav = [
    //   { titulo: "Inicio", url: "/", icon: "" },
    //   { titulo: "Contacto", url: "/contacto", icon: "" },
    // ];
    // let active_nav = 0;
    // const Navigate = () => {
    //   return (
    //     <>
    //       <nav className="navbar navbar-expand navbar-light bg-light">
    //         <div className="container-fluid">
    //           <div className="collapse navbar-collapse" id="navbarNav">
    //             <ul className="navbar-nav">
    //               {arr_nav.map((item, index) => (
    //                 <li className="nav-item" key={index}>
    //                   <Link href="/">
    //                     <a
    //                       className={`nav-link ${
    //                         active_nav === index ? "active" : ""
    //                       }`}
    //                       onClick={() => active_nav = index}
    //                     >
    //                       {item.titulo}
    //                     </a>
    //                     {/* <a className="nav-link active">
    //                       {item.titulo}
    //                     </a> */}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </nav>
    //     </>
    //   );
    // };


