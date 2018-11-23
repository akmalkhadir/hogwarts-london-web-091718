import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import HogDetails from './HogDetails';
import Filters from './Filters';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: [],
      filteredHogs: [],
      selectedHog: null,
      weightSort: false,
      nameSort: false,
      greasedFilter: false
    }
  }

  componentDidMount () {
    this.setState({
      hogs
    })
  }
  
  handleGrease = () => {
    this.filterByGreased()
  }
  

  filterByGreased = () => {
    const filterHogs = [...this.state.hogs].filter(hog => hog.greased === true)
    this.state.filteredHogs.length < 1 ? this.setState({ filteredHogs: filterHogs }) : this.setState({ filteredHogs: [] })
  }

  deselectHog = () => {
    this.setState({
      selectedHog: null
    })
  }

  selectHog = hog => {
    this.setState({
      selectedHog: hog
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filters handleGrease={this.handleGrease}/>
          {this.state.selectedHog ?
              <HogDetails deselectHog = {this.deselectHog} handleClick = {() => console.log("wohoo")} selectedHog={this.state.selectedHog}/> :
              <HogList selectHog={this.selectHog} hogs={hogs} filteredHogs={this.state.filteredHogs}/>
          }
      </div>
    )
  }
}

export default App;
