const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load configuration
dotenv.config();

const app = require('./app');

// Connect to Database
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (e) => {
    console.error(`🙅🏻‍♂️ ${e.message}`);
});

// Set port
app.set('port', process.env.PORT || 5001);

// Start the server
app.listen(app.get('port'), () => { 
    console.log(`Server started on port ${app.get('port')}`) 
});