import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import allAdviceData from '../../APIcalls';
import Nav from '../Nav/Nav';
import DailyAdvice from '../DailyAdvice/DailyAdvice';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allAdvice: [],
      isFavorited: false,
      pieceOfAdvice: {}
    }
  }

  // getRandomAdvice = (array) => {
  //   const index = Math.floor(Math.random() * array.length)
  //   this.setState({pieceOfAdvice: this.state.allAdvice[index]})
  // }

componentDidMount = () => {
  return allAdviceData()
    .then((data) => this.setState({ allAdvice: data.slip }))
    .catch((error) =>
      this.setState({ hasError: true, error: `Oops! Something went wrong!` })
    );
};


render() {
return (
  <main className='App'>
    <Nav />
    <Route
      exact
      path='/'
      render={() => <DailyAdvice />}
    />
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <div>
            <p className='favorite-message-tag'>
              Click the heart icon to add message to your favorites
            </p>
            <AllAdvice
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
            // lifers={this.state.lifers}
            // allBirds={this.state.allBirds}
            // changeIcon={this.changeIcon}
          />
        )}
      />
    <Route
    render={() => (
      <div className='no-match'>404 Error: Sorry, the URL/page you requested was not found.</div>)}
      />
      </Switch>
    <footer>
      <img src={logo} alt='Fowl Prowl Logo' id='logo' />
    </footer>
  </main>
)
}
}

export default App;
