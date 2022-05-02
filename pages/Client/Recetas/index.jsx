import styles from "./recetas.module.css"
import YouTube from 'react-youtube';
import { useState } from "react";

var cElement = null;

const Recetas = () => {
    const [va, setVa] = useState(0);

    const infoVideos = [
        { nombre: "Nombre Receta", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
        { nombre: "Nombre Receta1", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
        { nombre: "Nombre Receta2", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
        { nombre: "Nombre Receta3", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
        { nombre: "Nombre Receta4", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
        { nombre: "Nombre Receta5", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
        { nombre: "Nombre Receta6", info: "Lorem ipsum dolor sit amet, consectetu adipiscing elit leo.",video:"bH2ywnGV0B0" },
    ]

    const handler = (i) =>{
        setVa(i)
    }


    const opts = {
        height: "390",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: false,
            }
    }

    const _onReady = event => {
        cElement = event;
        event.target.playVideo();
    };
    const _onStateChange = event => {
        event.target.pauseVideo()
    };

    return (
        <div className={styles.contenedor}>
            <div className={styles.videoPrincipal}>
                <div className={styles.video}>
                    <YouTube
                        videoId={infoVideos[va].video}
                        opts={opts}
                        onReady={_onReady}
                        onStateChange={_onStateChange}
                        autoplay= {false}
                    />
                </div>
                <div className={styles.infoVideo}>
                    <h1>{infoVideos[va].nombre}</h1>
                    <p>{infoVideos[va].info}</p>
                </div>
            </div>
            <div className={styles.videosDerecha}>
                {infoVideos.map((v, i) => (
                    <div className={i == va ? styles.activa : styles.derecha}>
                        <div className={styles.video}>
                            <YouTube
                                videoId={v.video}
                                opts={opts}
                                onReady={_onReady}
                                onStateChange={_onStateChange}
                                autoplay= {false}

                            />
                        </div>
                        <div className={styles.infoVideo}  >
                            <h1 onClick={()=>handler(i)} >{v.nombre}</h1>
                            <p>{v.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recetas;
<>
</>