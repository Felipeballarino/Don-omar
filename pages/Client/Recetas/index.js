import styles from "./recetas.module.css"
import YouTube from 'react-youtube';

var cElement = null;

const Recetas = () => {

    const opts = {
        height: "390",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }

    const _onReady = event => {
        console.log("_onReady");
        cElement = event;
         event.target.playVideo();
      };
      const _onStateChange = event => {
         //event.target.pauseVideo()
      };

    return (
        <div className={styles.contenedor}>
            <div className={styles.videoPrincipal}>
                <YouTube
                    videoId={"bH2ywnGV0B0"}
                    opts={opts}
                    onReady={_onReady}
                    onStateChange={_onStateChange}
                />

            </div>
            <div>

            </div>
        </div>
    );
}

export default Recetas;
<>
</>