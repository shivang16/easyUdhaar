const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

//Connect to DB
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true,useNewUrlParser: true  },function(){
    
console.log("DB CONNECTED!!");
})

//Import Routes
const authRoute = require('./routes/auth.js');
const dashboard = require('./routes/dashboard');
const newCampaign = require('./routes/newCampaign');
const verification = require('./routes/verification');
const newLender = require('./routes/newLending');
const transaction = require('./routes/transactionHistory');
const repayment = require('./routes/repayment');

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import Template from './../template';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Routes from './../client/Routes';
import { StaticRouter } from 'react-router-dom';
import theme from './../client/theme';
import devBundle from './devBundle';

devBundle.compile(app);

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// Adding Middleware
app.use('/user',authRoute);
app.use('/dashboard1',dashboard);
app.use('/newCampaign',newCampaign);
app.use('/verification',verification);
app.use('/newLending',newLender);
app.use('/transaction',transaction);
app.use('/repayment',repayment);


app.get('*', (req, res) => {
    const sheets = new ServerStyleSheets()
    const context = {}
    const markup = ReactDOMServer.renderToString(
      sheets.collect(
            <StaticRouter location={req.url} context={context}>
              <ThemeProvider theme={theme}>
                <Routes />
              </ThemeProvider>
            </StaticRouter>
          )
      )
      if (context.url) {
        return res.redirect(303, context.url)
      }
      const css = sheets.toString()
      res.status(200).send(Template({
        markup: markup,
        css: css
      }))
  })

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })
    
app.listen(3000,function(req,res){
    console.log("SERVER IS ON!!");
});