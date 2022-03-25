import styles from "./tienda.module.css";
import Head from "next/head";
import Image from "next/image";

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
            <div className={styles.card} key={index}>
              <Image
                src="/media/Photo.jpg"
                alt={item}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                priority="false"
              />
              <div className={styles.infoCard}>
                <h3>NOMBRE DEL CORTE</h3>
                <div className={styles.precioCont}>
                  <div className={styles.precio}>
                    <p>
                      <span>$ 1500</span> x un
                    </p>
                    <p>Precio Aproximado</p>
                  </div>
                  <div className={styles.cantidad}>
                    <span> - </span>
                    <span> 1 </span>
                    <span> + </span>
                  </div>
                </div>
                <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tienda;
