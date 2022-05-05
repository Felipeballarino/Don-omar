import { conexionDB } from '../../../config/db';
import { SessionProvider, getSession } from 'next-auth/react';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return await saveUser(req, res);
    case 'GET':
      switch (req.query.path) {
        case "GET_USER" :
            return await getUser(req, res);
            break;
        default:
          break;
      }

  }
}

const getUser = async (req, res) => {
  const user = await getSession({req})
  const email = user.user.email
//   const email = req.query.email;

  const sql = `
    SELECT
      u.iduser,
      u.email,
      u.role,
      u.pass,
      u.telefono,
      now() as 'time'
    FROM
      usuario u
    WHERE
      u.email = '${email}';`
  const [result] = await conexionDB.query(sql);
//   // res.redirect(307, '/')
    return res.status(200).json(result[0]);
 };

const saveUser = async (req, res) => {
  const sql =
    `INSERT INTO
      usuario (
        role,
        nombre,
        pass,
        image,
        tipodoc,
        numdoc,
        telefono,
        email,
        fecregistro,
        recibe_oferta
      )
    VALUES
      (
        '${req.body.objUser.role}',
        '${req.body.objUser.nombre}',
        '${req.body.objUser.pass}',
        '${req.body.objUser.image}',
        '${req.body.objUser.tipodoc}',
        '${req.body.objUser.numdoc}',
        '${req.body.objUser.telefono}',
        '${req.body.objUser.email}',
        '${req.body.objUser.fecregistro}',
        '${req.body.objUser.recibe_oferta}'
  );`
  const [result] = await conexionDB.query(sql);
  console.log(result)
  return res.status(200).json({
    nombre: result.nombre,
    email: result.email,
    id: result.insertId,
    role: result.role
  });
};
