const Hapi = require("@hapi/hapi");
const hapiNuxt = require("@nuxtjs/hapi");
const Routes = require("./api");

async function start() {
  const server = new Hapi.Server({ port: 3000 });

  await server.register({
    plugin: hapiNuxt
  });

  await server.route(Routes);

  await server.start();

  console.log("Hapi server listening on http://localhost:3000");
}

start().catch(console.error);
