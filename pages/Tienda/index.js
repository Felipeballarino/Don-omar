import Container from "../../components/Container";
import styles from './tienda.module.css'
import Head from "next/head";

const Tienda = () => {
    return (
        <Container>
            <Head>
                <title>Don Omar | Tienda Online</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.categorias}>
                    <h1>Categorias </h1>
                    <ul>
                        <li><span>Vacuno</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Cerdo</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Pollo</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Achuras</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Embutidos</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Fiambres</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Corte x unidad</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Elaborados</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Cordero</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                        <li><span>Otros</span><span class="material-icons icon"> arrow_forward_ios </span></li>
                    </ul>
                </div>
                <div className={styles.contCard}>
                    <div className={styles.card}>
                        <img src="media/Photo.jpg" alt="fotocard" />
                        <div className={styles.infoCard}>
                            <h3>NOMBRE DEL CORTE</h3>
                            <div className={styles.precioCont}>
                                <div className={styles.precio}>
                                    <span>$ 1500 x un</span>
                                    <p>Precio Estimado</p>
                                </div>
                                <p> + 1 -</p>
                            </div>
                            <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="media/Photo.jpg" alt="fotocard" />
                        <div className={styles.infoCard}>
                            <h3>NOMBRE DEL CORTE</h3>
                            <div className={styles.precioCont}>
                                <div className={styles.precio}>
                                    <span>$ 1500 x un</span>
                                    <p>Precio Estimado</p>
                                </div>
                                <p> + 1 -</p>
                            </div>
                            <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="media/Photo.jpg" alt="fotocard" />
                        <div className={styles.infoCard}>
                            <h3>NOMBRE DEL CORTE</h3>
                            <div className={styles.precioCont}>
                                <div className={styles.precio}>
                                    <span>$ 1500 x un</span>
                                    <p>Precio Estimado</p>
                                </div>
                                <p> + 1 -</p>
                            </div>
                            <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="media/Photo.jpg" alt="fotocard" />
                        <div className={styles.infoCard}>
                            <h3>NOMBRE DEL CORTE</h3>
                            <div className={styles.precioCont}>
                                <div className={styles.precio}>
                                    <span>$ 1500 x un</span>
                                    <p>Precio Estimado</p>
                                </div>
                                <p> + 1 -</p>
                            </div>
                            <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="media/Photo.jpg" alt="fotocard" />
                        <div className={styles.infoCard}>
                            <h3>NOMBRE DEL CORTE</h3>
                            <div className={styles.precioCont}>
                                <div className={styles.precio}>
                                    <span>$ 1500 x un</span>
                                    <p>Precio Estimado</p>
                                </div>
                                <p> + 1 -</p>
                            </div>
                            <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="media/Photo.jpg" alt="fotocard" />
                        <div className={styles.infoCard}>
                            <h3>NOMBRE DEL CORTE</h3>
                            <div className={styles.precioCont}>
                                <div className={styles.precio}>
                                    <span>$ 1500 x un</span>
                                    <p>Precio Estimado</p>
                                </div>
                                <p> + 1 -</p>
                            </div>
                            <p>La unidad de este producto oscila entre *0.9 y 1.2 kg.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Tienda;