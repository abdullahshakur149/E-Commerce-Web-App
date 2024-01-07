
const app = require('./app')
const connectDB = require('./db/database')

// handling uncaught exception error
process.on("uncaughtException", (err)=>{
    console.log(err.message)
    console.log('server shutdown for handling uncaught exception')
})

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}


//   connect db
connectDB();

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

// create server
const server = app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT}`.brightRed.bold.underline);
  });

  
  