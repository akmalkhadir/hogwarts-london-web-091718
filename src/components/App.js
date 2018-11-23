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
      greasedFilter: false,
      hogsToRender: []
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
    this.state.filteredHogs.length < 1 ? this.setState({ filteredHogs: filterHogs, greasedFilter: true }) : this.setState({ filteredHogs: [], greasedFilter: false })
  }

  sortByname = () => {
    this.state.nameSort ? this.setState({nameSort:false}) : this.setState({nameSort: true})
    if (this.state.nameSort) {
      this.setState({ nameSort: false })
    } else {
      this.setState({ nameSort: true })
      if (this.state.greasedFilter === false) {
        const sortedHogsAll = [...this.state.hogs].sort((a, b) => a.name.localeCompare(b.name))
        return sortedHogsAll
      } else {
        const sortedHogsFiltered = [...this.state.filteredHogs].sort((a, b) => a.name.localeCompare(b.name))
        return sortedHogsFiltered
      }
    }


    if (this.state.greasedFilter === false) {
     const sortedHogsAll = [...this.state.hogs].sort((a, b) => a.name.localeCompare(b.name))
      return sortedHogsAll
    } else {
      const sortedHogsFiltered = [...this.state.filteredHogs].sort((a, b) => a.name.localeCompare(b.name))
      return sortedHogsFiltered
    }
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

  filterHogs = (hogs) => hogs.filter(hog => this.state.greasedFilter ? hog.greased : true )

  sortHog = (hogs) => {

  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filters handleGrease={this.handleGrease}/>
          {this.state.selectedHog ?
              <HogDetails deselectHog = {this.deselectHog} handleClick = {() => console.log("wohoo")} selectedHog={this.state.selectedHog}/> :
              <HogList selectHog={this.selectHog} hogs={this.sortHogs(this.filterHogs(hogs))} filteredHogs={this.state.filteredHogs}/>
          }
      </div>
    )
  }
}

export default App;
