import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import allAdviceData from '../../APIcalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allAdvice: [],
      isFavorited: false,
      pieceOfAdvice: {}
    }
  }

  // componentDidMount = () => {
  //   fetchCalls
  //     .fetchData('allAdvice')
  //     .then((data) => {
  //       const newArray = data.map((advice) => {
  //         advice.isFavorited = false
  //         advice.key = advice.id
  //         return advice
  //       })
  //       this.setState({allAdvice: newArray})
  //     })
  //     .then(() => this.getRandomAdvice(this.state.allAdvice))
  // }

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
        <div>Hi!</div>
      </main>
    )
  }
}

export default App;
