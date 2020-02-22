import React, {Component} from 'react';
import axios from 'axios';

import Navigation from './components/Navigation';
import InputForm from './components/InputForm';
import PlayerCard from './components/PlayerCard';
import './App.css';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      player: [],
      playerText: ''
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res =>
      {
        this.setState({
          player: res.data
        })
        console.log(res)
      })
      .catch(err => {
        console.log('error in player data', err)
      })
  }

  handleChanges = e => {
    this.setState({
      playerText: e.target.value
    })
  }

  getPlayer = e => {
    e.preventDefault()
    axios
    .get(`http://localhost:5000/api/${this.state.playerText}`)
    .then(res => {
      this.setState({
        player: res.data
      })
      
    })
.catch(err => console.log('error in playerText', err))
  }

  render(){

  }
  return (
    <div className="App">
    <Navigation />
      <InputForm 
      updateText={this.state.playerText}
      changeHandler={this.handleChanges}
      get={this.getPlayer}
      />
      <PlayerCard
      player={this.state.player}
      />
    </div>
  );
}

export default App;
