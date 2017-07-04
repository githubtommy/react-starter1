import React from 'react';
import { BrowserRouter, Route, Link, HashRouter, Switch } from 'react-router-dom'
import BookData from '../app/data.js'

// The Roster component matches one of two different routes
// depending on the full pathname
const Books = () => (
  <Switch>
    <Route exact path='/books' component={AllBooks}/>
    <Route path='/books/:id' component={Player}/>
  </Switch>
)

// The AllBooks iterates over all of the players and creates
// a link to their profile page.
const AllBooks = () => (
  <div>
    <h1>Key Books Written by Mark Twain</h1>
    <ul>
      {
        BookData.all().map(p => (
          <li key={p.id} data-id={p.id}>
            <Link to={`/books/${p.id}`}>{p.year} - {p.title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  const player = BookData.get(
			parseInt(props.match.params.id, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <Link to='/books'>Back to All Books</Link>
      <h1>{player.title}</h1>
      <p>{player.year}</p>
      <h3>First line</h3>
      <p>{player.firstLine}</p>

    </div>
  )
}

export default Books;
