const express = require("express")
const app = express();

const PORT = 3000;

const pageRoutes = require("./routes/pageRoutes")
const sysRoutes = require("./routes/systemRoutes");

app.use(pageRoutes);
app.use(sysRoutes);


app.listen(PORT, ()=>{
    console.log("Server started!");
    
})