const app = require("./app");
const env = require("dotenv").config();
const http = require("http");

const normalizePort = (val) => {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return port;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const onError = error => {
  if (error.syscall !== "listen") { 
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe " + addr : "Port " + port;
  switch (error.code) {
    case "EACCESS":
      console.error(bind + " requires elevated privileges.");
      process.exit();
      break;
    case "EADDRESSINUSE":
      console.error(bind + " is already in use");
      process.exit();
      break;
    default:
      throw error;
  }
};
const onListening = () => {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + add : "port " + port;
  debug("Listening on " + bind);
};
const port = normalizePort(process.env.SERVER_PORT || "3000");
const server = http.createServer(app);

app.set('port', port);
server.on('error', onError);
server.on('listening', onListening);
app.listen(port, () => {
  console.log(`Juntrax server is running on port: ${port}`);
});