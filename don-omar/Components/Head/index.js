import style from './head.module.css'

export default function Head() {
        return (
        <>
        <div className={style.contenedor}>
                <div className={style.contenedorLeft}>
                    <img src='/logotipo-donomar.png' alt="logo" />
                    <div className={style.contMenu}>
                        <a>Tienda online</a>
                        <a>Recetas</a>
                        <a>Carnes de Campo</a>
                    </div>
                </div>
                <div className={style.contCart}>
                    <button><span className="material-icons"> shopping_cart </span></button>
                </div>
            </div>

        </>
    )

}



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


