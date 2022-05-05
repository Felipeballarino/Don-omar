import React, { useEffect, useState } from "react";
import styles from './form.module.css'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import Swal from 'sweetalert2'

import { signIn } from 'next-auth/react';

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



const registrer = {
  mail: "",
  telefono: "",
  password: "",
  confirm_password: ""
}


const Formulario = ({ i }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(i)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [error, setError] = useState({
    mail: "",
    telefono: "",
    password: "",
    confirm_password: ""
  })
  const [user, setUser] = useState({
    mail: '',
    telefono: '',
    password: ''
  });

  // const [registrer, setRegistrer] = useState({
  //   mail: "",
  //   telefono: "",
  //   password: "",
  //   confirm_password: ""
  // });




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

    if (!error.mail && !error.confirm_password && !error.telefono) {
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

  const handlerChangeUser = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleChange = ({ target: { name, value } }) => {
    registrer[name] = value
    // setRegistrer({ ...registrer, [name]: value });
    setError(validatorReg({
      ...error,
      [name]: value
    }))
  };

  const validatorReg = () => {
    let errors = {}
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!registrer.mail || !regex.test(registrer.mail)) {
      errors.mail = "El mail no es valido."
    }
    if (!registrer.telefono) {
      errors.telefono = "El numero es obligatorio."
    }
    if (registrer.password.length < 5) {
      errors.password = "Tiene que tener al menos 6 caracteres."
    }

    // 
    if (registrer.confirm_password != registrer.password) {
      errors.confirm_password = "Las contrasenas no coinciden."
    } else {
      errors.confirm_password = ""
    }
    return errors
  }


  const Change = () => {
    if (index == 0) {
      setIndex(1)
    } else {
      setIndex(0)
    }
  }

  // index == 0 ?
  // setUser({ ...user, [name]: value })
  // :
  // setRegistrer({ ...registrer, [name]: value });



  return (
    <div>
      <button onClick={handleOpen} className={styles.boton} >
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
                  <input type="text" id="mail" placeholder="Email ej: toni@gmail.com" name="mail" onChange={handleChange}></input>
                  {error.mail ? <p className={styles.error}>{error.mail}</p> : ""}

                </div>
                <div className={styles.contInput} >
                  <label htmlFor="telefono">Telefono</label>
                  <input type="number" id="telefono" placeholder="Ingrese tu Telefono" name="telefono" onChange={handleChange}></input>
                  {error.telefono ? <p className={styles.error}>{error.telefono}</p> : ""}
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" placeholder="Ingrese tu Contraseña" name="password" onChange={handleChange}></input>
                  {error.password ? <p className={styles.error}>{error.password}</p> : ""}
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="confirm_password">Repite tu contraseña</label>
                  <input type="password" id="confirm_password" placeholder="Repite tu contraseña" name="confirm_password" onChange={handleChange}></input>
                  {error.confirm_password ? <p className={styles.error}>{error.confirm_password}</p> : ""}

                </div>
                <input type="submit" value="Crear Usuario" className={styles.boton}></input>
                <div className={styles.registro}>
                  <p>¿Ya tienes cuenta? <a onClick={Change}>Volver a Iniciar Sesion</a></p>
                </div>
              </form>
            </div>
            :
            <div className={styles.cont}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.titulo}>
                INICIAR SESIÓN
              </Typography>

              <div className={styles.contGoogle}>
                <button onClick={() => {
                  signIn('google');
                }}>
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                  Ingresar con Google
                </button>
              </div>

              <form className={styles.formulario}  >
                <div className={styles.contInput} >
                  <label htmlFor="mail">Mail o Telefono</label>
                  <input type="text" id="mail" placeholder="Ingrese tu Email" name="mail" onChange={handlerChangeUser}></input>
                </div>
                <div className={styles.contInput} >
                  <label htmlFor="Contraseña">Contraseña</label>
                  <input type="password" id="Contraseña" placeholder="Contraseña" name="Contraseña" onChange={handlerChangeUser}></input>
                </div>
                <div className={styles.olvidar}>
                  <a>Olvide mi contraseña</a>
                </div>

                <input type="submit" value="Ingresar" className={styles.boton}></input>
                <div className={styles.registro}>
                  <p>¿No tenes una cuenta? <a onClick={Change}>Registrate aquí</a></p>
                </div>
              </form>

            </div>}

        </Box>
      </Modal>
    </div>
  );
};

export default Formulario;
