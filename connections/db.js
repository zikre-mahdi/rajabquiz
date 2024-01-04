const Knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./db/mydb.sqlite"
    },
    useNullAsDefault: true
  });

  export const addUser = (name, type="viewer") => Knex("users").insert({name, type});
  export const deleteUser = (name, type="viewer") => Knex("users").where({name, type}).delete();
  export const getUsers = () => Knex("users");