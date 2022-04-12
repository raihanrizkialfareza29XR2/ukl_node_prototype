//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint user
const user = require('./routes/user');
app.use("/user", user)

//endpoint outlet
const outlet = require('./routes/outlet');
app.use("/outlet", outlet)

//endpoint member
const member = require('./routes/member');
app.use("/member", member)

//endpoint paket
const paket = require('./routes/paket');
app.use("/paket", paket)


//run server
app.listen(8000, () => {
    console.log('server run on port 8000')
})
