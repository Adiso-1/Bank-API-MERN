// pass: DHdRol8dtm59nsa6
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const userRouter = require('./routes/users');

const app = express();

//! app.use(cors()) MUST be BEFORE using routers
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);

const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
mongoose.connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
