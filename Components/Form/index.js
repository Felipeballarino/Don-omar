import React, { useEffect, useState } from "react";
import styles from './form.module.css'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import Swal from 'sweetalert2'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Formulario = ({ i }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(i)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errorMail, setErrorMail] = useState('')

  const [user, setUser] = useState({
    mail: '',
    telefono: '',
    password: ''
  });

  const [registrer, setRegistrer] = useState({
    mail: null,
    telefono: null,
    password: null,
  });

  const confirmarRegistro = async (e) => {
    e.preventDefault();
    // await axios.post('/api/user', { user });
    const objUser = {
      role: 'Cliente',
      nombre: '',
      email: registrer.mail,
      image: "",
      pass: registrer.password,
      tipodoc: 1,
      numdoc: '',
      telefono: registrer.telefono,
      fecregistro: '',
      recibe_oferta: 0
    }
    console.log(objUser)
    if (objUser.email && objUser.pass && objUser.telefono) {
      await axios.post('http://localhost:3000/api/user/login', { objUser });
      Swal.fire({
        icon: 'success',
        title: 'Usuario Creado',
        showConfirmButton: false,
      })
      setIndex(0)

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Faltan Datos',
        text: 'Ningun campo puede estar vacio !',
      })

    }


  };

  const handleChange = ({ target: { name, value } }) => {
    index == 0 ?
      setUser({ ...user, [name]: value })
      :
      setRegistrer({ ...registrer, [name]: value });
  };

  const hendlerChangeEmail = (value) => {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setErrorMail('el usuario tiene que ser un email');
    } else {
      setErrorMail('');
    }
    setRegistrer({ ...registrer, mail: value });
  }

  const handlerChange = () => {
    if (index == 0) {
      setIndex(1)
    } else {
      setIndex(0)
    }
  }




  return (
    <div>
      <button onClick={handleOpen} className={styles.boton}>
        <span className="material-icons">whatsapp</span>
        <p>Enviar pedido</p>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.contenedor}>
          <div className={styles.close} onClick={handleClose}>
            <span className="material-icons">close</span>
          </div>

          {index == 1 ?
            <div className={styles.cont}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.titulo}>
                REGISTRO
              </Typography>
              <form className={styles.formulario} onSubmit={confirmarRegistro} >
                <div className={styles.contInput} >
                  <label htmlFor="mail">Mail</label>
                  <input type="text" id="mail" placeholder="Email ej: toni@gmail.com" name="mail" onChange={(e) => hendlerChangeEmail(e.target.value)}></input>
                  {!errorMail ? null : <span>{errorMail}</span>}
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="telefono">Telefono</label>
                  <input type="number" id="telefono" placeholder="Ingrese tu Telefono" name="telefono" onChange={handleChange}></input>
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" placeholder="Ingrese tu Contraseña" name="password" onChange={handleChange}></input>
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="password1">Repite tu contraseña</label>
                  <input type="password" id="password1" placeholder="Repite tu contraseña" name="password1" onChange={handleChange}></input>
                </div>
                <input type="submit" value="Crear Usuario" className={styles.boton}></input>
                <div className={styles.registro}>
                  <p>¿Ya tienes cuenta? <a onClick={handlerChange}>Volver a Iniciar Sesion</a></p>
                </div>
              </form>
            </div>
            :
            <div className={styles.cont}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.titulo}>
                INICIAR SESIÓN
              </Typography>
              <form className={styles.formulario}  >
                <div className={styles.contInput} >
                  <label htmlFor="mail">Mail o Telefono</label>
                  <input type="text" id="mail" placeholder="Ingrese tu Email" name="mail" onChange={handleChange}></input>
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="Contraseña">Contraseña</label>
                  <input type="password" id="Contraseña" placeholder="Contraseña" name="Contraseña" onChange={handleChange}></input>
                </div>
                <div className={styles.olvidar}>
                  <a>Olvide mi contraseña</a>
                </div>

                <input type="submit" value="Ingresar" className={styles.boton}></input>
                <div className={styles.registro}>
                  <p>¿No tenes una cuenta? <a onClick={handlerChange}>Registrate aquí</a></p>
                </div>
              </form>

            </div>}

        </Box>
      </Modal>
    </div>
  );
};

export default Formulario;
