import { conexionDB } from '../../../config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return await saveUser(req, res);
    case 'GET':
      return await getUser(req, res);
  }
}

const getUser = async (req, res) => {
  const email = req.query.email;
  const [result] = await conexionDB.query(
    `CALL SP_usuario_get_email('${email}')`
  );

  // res.redirect(307, '/')
  return res.status(200).json(result[0][0]);
};

const saveUser = async (req, res) => {
  // const sql = `CALL SP_usuario_add(
  //   '${req.body.objUser.role}',
  //   '${req.body.objUser.nombre}',
  //   '${req.body.objUser.pass}',
  //   '${req.body.objUser.image}',
  //   '${req.body.objUser.tipodoc}',
  //   '${req.body.objUser.numdoc}',
  //   '${req.body.objUser.telefono}',
  //   '${req.body.objUser.email}',
  //   '${req.body.objUser.fecregistro}',
  //   '${req.body.objUser.recibe_oferta}'
  //   )`;
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
    nombre:result.nombre,
    email: result.email,
    id: result.insertId,
    role: result.role
  });
};
