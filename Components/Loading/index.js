import styles from './loading.module.css'


const Loading = () => {
    return (
        <>
            <div className={styles.contenedor}>
                <div className={styles.spinner}></div>
            </div>

        </>
    );
}

export default Loading;