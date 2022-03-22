import styles from "./Home.module.css";
import YouTube from "react-youtube";

const Home = () => {


  const _onReady = (event)=> {
    event.target.pauseVideo();
  }

  return (
    <>
      <div className={styles.contenedorPrincipal}>
        <div className={styles.contenedorUno}>
          <div className={styles.tituloImagen}>
            <h1>DON OMAR CARNES DE CAMPO</h1>
            <p>Una familia de 3 generaciones produciendo y distribuyendo carne de
              novillito de calidad premium</p>
          </div>
          <img src="media/foto-head.png" alt="head" />
        </div>

        <div className={styles.contenedorDos}>
          <div className={styles.card}>
            <span className="material-icons"> file_download_done </span>
            <h3>Calidad</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sit
              illo sint cum maxime quibusdam, aliquam pariatur quas a, quis error?
              Dicta distinctio illo earum, velit ipsum recusandae rerum excepturi?
            </p>
          </div>
          <div className={styles.card}>
            <span className="material-icons"> place </span>
            <h3>Ubicacion</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sit
              illo sint cum maxime quibusdam, aliquam pariatur quas a, quis error?
              Dicta distinctio illo earum, velit ipsum recusandae rerum excepturi?
            </p>
          </div>
          <div className={styles.card}>
            <span className="material-icons"> restaurant </span>
            <h3>Cultura</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sit
              illo sint cum maxime quibusdam, aliquam pariatur quas a, quis error?
              Dicta distinctio illo earum, velit ipsum recusandae rerum excepturi?
            </p>
          </div>
        </div>

        <div className={styles.contenedorTres}>
          <div className={styles.titulo}>
            <h1>Tienda Online</h1>
            <p>
              Elegi tus productos preferidos, arma tu carrito y recibilo en la
              comunidad de tu hogar
            </p>
          </div>
          <div className={styles.imagenes}>
            <div className={styles.cardImg}>
              <h3>NOVILLO</h3>
              <img src="media/carne.png" alt="novillo" />
            </div>
            <div className={styles.cardImgDos}>
              <h3>CERDO</h3>
              <img src="media/carne.png" alt="novillo" />
            </div>
            <div className={styles.cardImg}>
              <h3>POLLO</h3>
              <img src="media/carne.png" alt="novillo" />
            </div>
            <div className={styles.cardImgDos}>
              <h3>ACHURAS</h3>
              <img src="media/carne.png" alt="novillo" />
            </div>
          </div>
          <div className={styles.boton}>
            <button>Ver todos los productos</button>
          </div>
        </div>

        <div className={styles.contenedorCuatro}>
          <div className={styles.titulo}>
            <h1>Recetas</h1>
            <p>
              Ingresa en nuestro canal de youtube y busca tus recetas preferidas de la
              mano de nuetros cheff
            </p>
          </div>
         <div className={styles.video}>
         <YouTube videoId="https://www.youtube.com/embed/ef-xV3Ce6Vw?feature=oembed"  />
         </div>

          <div className={styles.boton}>
            <button>Ver todas las recetas</button>
          </div>
        </div>

        <div className={styles.contenedorCinco}>
          <h1>Carnes de Campo</h1>
          <div >
            <div className={styles.informacion}>
              <div className={styles.info} >
                <h3>Historia</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  possimus assumenda commodi soluta et cum aliquid suscipit officia
                  aperiam ipsum incidunt molestiae voluptas, sint atque repudiandae,
                  nisi obcaecati architecto harum.
                </p>
              </div>
              <div className={styles.infoImg}>
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
              </div>
            </div> 

            <div className={styles.informacion}>
              <div className={styles.infoImg}>
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
              </div>
              <div className={styles.info} >
                <h3>Modelo de negocio</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  possimus assumenda commodi soluta et cum aliquid suscipit officia
                  aperiam ipsum incidunt molestiae voluptas, sint atque repudiandae,
                  nisi obcaecati architecto harum.
                </p>
              </div>
            </div>
            <div className={styles.informacion}>
              <div className={styles.info} >
                <h3>Vision y mision</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  possimus assumenda commodi soluta et cum aliquid suscipit officia
                  aperiam ipsum incidunt molestiae voluptas, sint atque repudiandae,
                  nisi obcaecati architecto harum.
                </p>
              </div>
              <div className={styles.infoImg}>
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
              </div>
            </div> 

            <div className={styles.informacion}>
              <div className={styles.infoImg}>
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
                <img src="media/carne.png" alt="carne" />
              </div>
              <div className={styles.info} >
                <h3>Proximamente</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  possimus assumenda commodi soluta et cum aliquid suscipit officia
                  aperiam ipsum incidunt molestiae voluptas, sint atque repudiandae,
                  nisi obcaecati architecto harum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;