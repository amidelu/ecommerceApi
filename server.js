const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors);
// Parse request of content type application/json
app.use(bodyParser.json());
// Parse request of content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// const db = require('./model');
// db.sequelize.sync();

// Routers
const productRouter = require('./routes/productRouter.js')
app.use("/api", productRouter)

// Simple route
app.get('/', (req, res) => {
    res.json({
        message: 'Ecommerce api is working!'
    });
});

// Set port and listen to request
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
