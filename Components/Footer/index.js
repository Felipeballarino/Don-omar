import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.contenedor}>
                <div className={styles.contUno}>
                    <img src="/logotipo-donomar.png" alt="logo" />
                    <div className={styles.redes}>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-whatsapp' ></i>
                    </div>
                </div>
                <div className={styles.contDos}>
                    <h1>SUCURSALES</h1>
                    <p>Av. Guillermo Rawson & Leandro N. Alem - Villa Maria, Cordoba</p>
                    <p>Blvd. Sarmiento 1664 - Vila Maria, Cordoba</p>
                    <p>Av. Carranza 265 - Villa Maria, Cordoba</p>
                </div>
                <div className={styles.contTres}>
                    <h1>CONTACTENOS</h1>
                    <div className={styles.contactenos}>
                        <div >
                            <p>Sucursal Baudino 353 4767113</p>
                            <p>Sucursar Sarmiento 353 4767113</p>
                            <p>Sucursal Carranza 353 4767113</p>
                            <p>Venta Mayorista 353 4767113</p>
                        </div>
                        <div >
                            <p>Contacto@donomar.com.ar </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;