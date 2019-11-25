import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

//When setting the images from a source folder
//require(`../hog-imgs/${imageName}.jpg`) 

class App extends Component {
  constructor(){
    super()

    this.state = {
      allSushi: [],
      showSushi: [],
      start: 0,
      wallet: 100
    }
  }

  componentDidMount(){

    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allSushi: data,
        ...this.setState.allSushi,
        showSushi: data.slice(0, 4)
      })
    })
  }

  ateSushi = (event, sushiObj) => {
    let currentSushi = this.state.showSushi
    let allSushi = this.state.allSushi
    let currentWallet = this.state.wallet

    //need to update the wallet for dude as well.
    if (sushiObj.price > currentWallet) {
      alert('No more Money!!')
    } else {

      //map over all the sushi, if the sushi matches the sushiObj.id then add a eaten: true attribute. Then update state
      let updatedSushi =  currentSushi.map(sushi => {
        return sushi.id === sushiObj.id ? {...sushi, eaten: true} : sushi
      })
      //over kill... updating the all sushi array as well.. should have only used one sushi array...
      let updatedAllSushi = allSushi.map(sushi => {
        return sushi.id === sushiObj.id ? {...sushi, eaten: true} : sushi
      })

      //setting the state for everything
      this.setState({
        allSushi: updatedAllSushi,
        showSushi: updatedSushi,
        wallet: currentWallet - sushiObj.price
      })

    }
  }

  moreSushi = () => {
    let newStart = this.state.start
    if (newStart === 96 ){
      alert("No more Sushi :(")
    }

    newStart += 4

    let end = newStart + 4

    let newSushi = this.state.allSushi

    this.setState({
      start: newStart,
      showSushi: newSushi.slice(newStart, end)
    })

    console.log(newStart, end)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer showSushi={this.state.showSushi} ateSushi={this.ateSushi} 
        moreSushi={this.moreSushi} />
        <Table walletAmt = {this.state.wallet} eatenSushi={this.state.allSushi.filter(sushi => sushi.eaten)}/>
      </div>
    );
  }
}

export default App;