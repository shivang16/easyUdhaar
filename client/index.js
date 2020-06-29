import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

import './assets/fonts/SF-Pro-Display-Regular.otf'

hydrate(<App />, document.getElementById('root'));