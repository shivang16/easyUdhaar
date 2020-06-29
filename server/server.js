import path from 'path';
import express from 'express';
import Template from './../template';
import mongoose from 'mongoose';
import config from '../config/config';
import devBundle from './devBundle';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import theme from './../client/theme';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

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

app.get('*', (req, res) => {
    const sheets = new ServerStyleSheets();
    const context = {};
    const markup = ReactDOMServer.renderToString(
      sheets.collect(
            <StaticRouter location={req.url} context={context}>
              <ThemeProvider theme={theme}>
                <Routes />
              </ThemeProvider>
            </StaticRouter>
          )
      );
      if (context.url) {
        return res.redirect(303, context.url);
      }
      const css = sheets.toString();
      res.status(200).send(Template({
        markup: markup,
        css: css
      }));
  });


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database ${mongoUri}`);
});
