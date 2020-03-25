const express = require('express');
const cors =  require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP: n
  * 
  * GET: Buscar alguma informação do back-end
  * POST: Criar uma informação no back-end  
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parametros:
   * 
   * Query: Parametros nomeados enviados na rota apos "?" (Filtros, paginação)
   * Route Parms: parametros ultilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostGreeSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */  

    /**
     * Driver: Select * FROM users
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333);
