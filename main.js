const server = require('./server');


server.listen(process.env.PORT || 8080, async () => {
  console.log("server started" )
});
