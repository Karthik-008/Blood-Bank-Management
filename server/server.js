const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Router/router');
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect('mongodb://localhost:27017/BloodBank',
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
    console.log(`Connected to DB -> BloodBank`);
}).catch((error) => {
    console.log(`Error connecting to DB -> ${error}`);
    process.exit();
});

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server is running...'});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});