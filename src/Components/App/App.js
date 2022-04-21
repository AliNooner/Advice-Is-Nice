import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import allAdviceData from '../../APIcalls';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import AllCards from '../AllCards/AllCards';
import Favorites from '../Favorites/Favorites';


class App extends Component {
  constructor() {
    super();
    this.state = {
      singleAdvice: null,
      isFavorited: false,
      favorites: []
    }
  }
y

displayAdvice = () => {
  return allAdviceData()
  .then((data) => this.setState({ singleAdvice: data.slip.advice}))
  .catch((error) =>
  this.setState({ hasError: true, error: `Oops! Something went wrong!` })
);
}


addFavorite = (newAdvice) => {
    this.setState({favorites: [...this.state.favorites, newAdvice]})
  }



render() {
return (
  <main className='App'>
    <Nav />
    <Card singleAdvice={this.state.singleAdvice} addFavorites={this.addFavorite}/>
    <button className='advice-button' onClick={this.displayAdvice}>Give me advice</button>
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <div>
            <AllCards
              // allBirds={this.state.allBirds}
              // changeIcon={this.changeIcon}
            />
          </div>
        )}
      />
      <Route
        exact
        path='/favorites'
        render={() => (
          <Favorites
          favorites={this.state.favorites}
          />
        )}
      />
    <Route
    render={() => (
      <div className='no-match'>404 Error: Sorry, the URL/page you requested was not found.</div>)}
      />
      </Switch>
  </main>
)
}
}

export default App;
