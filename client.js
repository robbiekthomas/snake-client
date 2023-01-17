const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to Server");
  });

  conn.on("data", (data) => console.log(data));
  conn.on("end", (end) => console.log("disconnected from the server"));
  return conn;
};

module.exports = { connect };
