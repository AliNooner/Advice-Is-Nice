import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import allAdviceData from "../../APIcalls";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import Favorites from "../Favorites/Favorites";

class App extends Component {
  constructor() {
    super();
    this.state = {
      singleAdvice: null,
      isFavorited: false,
      favorites: [],
    };
  }

  displayAdvice = () => {
    return allAdviceData()
      .then((data) => this.setState({ singleAdvice: data.slip.advice }))
      .catch((error) =>
        this.setState({ hasError: true, error: `Oops! Something went wrong!` })
      );
  };

  addFavorite = (newAdvice) => {
    this.setState({ favorites: [...this.state.favorites, newAdvice] });
  };

  render() {
    return (
      <main className="App">
        <h1 className="title">Just a Thought</h1>
        <Nav />
        <Route
          exact
          path="/"
          render={() => (
            <Card
              singleAdvice={this.state.singleAdvice}
              addFavorites={this.addFavorite}
              displayAdvice={this.displayAdvice}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => <Favorites favorites={this.state.favorites} />}
        />
      </main>
    );
  }
}
export default App;
