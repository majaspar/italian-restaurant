const express = require('express');

const dishRoute = require('./routes/dishRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');
const path = require('path')
const cors = require('cors')

const db = require("./db.js")

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://restaurant-mqgk.onrender.com/"]
}))


app.use('/api/dishes/', dishRoute)               //if url is coming with 'api/dishes/' we navigate it to dishroute
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('../client/build'))

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, '../client/build/index.html'))

    })
}


app.get('/', (req, res) => {
    res.send("Server working🔥 on port " + port)
});

app.listen(port, () => console.log(`server running on port ${port}`))