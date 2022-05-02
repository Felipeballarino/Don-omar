import { createPool } from 'mysql2/promise';

const conexionDB = createPool({
  host: 'sql405.main-hosting.eu',
  port: 3306,
  user: 'u554787210_demoEcomerce',
  password: 'dem0Comerc3',
  database: 'u554787210_demoEcomerce'
});

export { conexionDB };
