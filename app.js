import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
// import logger from 'morgan';
import mongoose from 'mongoose';
// import bb from 'express-busboy';


// import routes
import hehe from './routes/todo.api.route';

const app = express();

app.get('/', (req,res)=>{
    return res.end('Rock yeaahh !');
});

app.use('/api', hehe);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Serevr running on port ${port}`);
});