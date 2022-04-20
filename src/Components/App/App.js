import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import allAdviceData from '../../APIcalls';
import Nav from '../Nav/Nav'


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
    .then((data) => this.setState({ allAdvice: data.slip}))
    .catch((error) =>
      this.setState({ hasError: true, error: `Oops! Something went wrong!` })
    );
};

  render() {
    return (
      <main className='App'>
				<Route
					exact
					path='/'
					render={() => <Nav />}
				/>
      </main>
    )
  }
}

export default App;
