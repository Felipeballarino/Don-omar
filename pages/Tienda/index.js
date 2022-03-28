import styles from "./tienda.module.css";
import Head from "next/head";
import Card from '../../Components/Card'




const arr_card = [0, 1, 2, 3, 4, 5, 6, 7];
const arr_categs = [
  { nombre: "Vacuno", icon: "" },
  { nombre: "Cerdo", icon: "" },
  { nombre: "Pollo", icon: "" },
  { nombre: "Achuras", icon: "" },
  { nombre: "Embutidos", icon: "" },
  { nombre: "Fiambres", icon: "" },
  { nombre: "Corte x unidad", icon: "" },
  { nombre: "Elaborados", icon: "" },
  { nombre: "Cordero", icon: "" },
  { nombre: "Otros", icon: "" },
];


const Tienda = () => {


  return (
    <>
      <Head>
        <title>Don Omar | Tienda Online</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.categorias}>
          <h1>Categorias </h1>
          <ul>
            {arr_categs.map((item, index) => (
              <li key={index}>
                <span>{item.nombre}</span>
                <span className="material-icons icon"> arrow_forward_ios </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contCard}>
          {arr_card.map((item, index) => (
            <Card item = {item} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};


export default Tienda;
