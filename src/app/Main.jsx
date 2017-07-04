import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home.jsx'
import Books from '../books/Books.jsx'
import Timeline from '../timeline/Timeline.jsx'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /books
// and /schedule routes will match any pathname that starts
// with /books or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/books' component={Books}/>
      <Route path='/timeline' component={Timeline}/>
    </Switch>
  </main>
)

export default Main;
