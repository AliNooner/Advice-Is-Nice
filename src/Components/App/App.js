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

  // getRandomAdvice = (array) => {
  //   const index = Math.floor(Math.random() * array.length)
  //   this.setState({pieceOfAdvice: this.state.allAdvice[index]})
  // }

// componentDidMount = () => {
  // this.displayAdvice()
  // if(this.displayAdvice()) {
  //   return allAdviceData()
  //   .then((data) => this.setState({ singleAdvice: data.slip.advice}))
  //   .catch((error) =>
  //   this.setState({ hasError: true, error: `Oops! Something went wrong!` })
  // );
//
  // }

// };

displayAdvice = () => {
  return allAdviceData()
  .then((data) => this.setState({ singleAdvice: data.slip.advice}))
  .catch((error) =>
  this.setState({ hasError: true, error: `Oops! Something went wrong!` })
);
}

saveToFavorites = () => {
  return allAdviceData()
  .then((data) => this.setState({ favorites: data.slip.advice}))
  .catch((error) =>
  this.setState({ hasError: true, error: `Oops! Something went wrong!` })
);
}

render() {
return (
  <main className='App'>
    <Nav />
    <Card singleAdvice={this.state.singleAdvice}/>
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
            // favorites={this.state.favorites}
            // allCards={this.state.allCards}
            // changeIcon={this.changeIcon}
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
