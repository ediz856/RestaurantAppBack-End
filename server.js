"use strict";

const Hapi = require("hapi");
const routes = require("./routes");

const app = async config => {
   const { host, port } = config;


   // create an instance of hapi
   const server = Hapi.server({ host, port });


   // store the config for late r use  
   server.app.config = config;


   // register routes
   await routes.register(server);
   await routes.users(server);
   await routes.products(server);
   await routes.addUser(server);
   await routes.updateUser(server);

   // Tables
   await routes.addProductToTable(server);
   await routes.updateTableStatus(server);
   await routes.getProductsOfTable(server);
   await routes.getAllTables(server);
   await routes.getTable(server);
   await routes.deleteProductsOnTable(server);
   await routes.getAllCategories(server);

   await routes.getProductsOfCategory(server); // By ID
   await routes.addToLogari(server);
   await routes.addToLogariDetails(server);
   return server;
};

module.exports = app;