import styles from './button.module.css'

const Button = (props) => {
    return (
        <div className={styles.boton}>
            <button>{props.children}</button>
        </div>
    );
}

export default Button;