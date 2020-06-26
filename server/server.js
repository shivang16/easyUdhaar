import path from 'path';
import express from 'express';
import template from './../template';
import mongoose from 'mongoose';
import config from '../config/config';
import devBundle from './devBundle';

const app = express();

devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
    if(err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
});


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database ${mongoUri}`);
});
