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
          <Filters />
          {this.state.selectedHog ?
              <HogDetails deselectHog = {this.deselectHog} handleClick = {() => console.log("wohoo")} selectedHog={this.state.selectedHog}/> :
              <HogList selectHog={this.selectHog} hogs={hogs} />
          }
      </div>
    )
  }
}

export default App;
