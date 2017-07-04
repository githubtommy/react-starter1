import React, { Component } from 'react';
import { render } from 'react-dom';
// using ES6 modules
import { BrowserRouter, Route, Link, HashRouter, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Header from '../app/Header.jsx'
import Main from '../app/Main.jsx'
import Home from '../home/Home.jsx';
import Books from '../books/Books.jsx';
import Timeline from '../timeline/Timeline.jsx';

import '../app/styles/app.css'
import '../app/styles/listmenu.css'

//import FullRoster from './components/FullRoster.js'


/*
	App
	- Header
	- Main
	- - Main
	- - Books
	- - - AllBooks
	- - - Book
	- - Timeline

*/

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))

