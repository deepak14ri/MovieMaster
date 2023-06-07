import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieslist: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://github.com/deepak14ri/robofriends/blob/master/moviejson.json')
      .then(response=> response.json())
      .then(users => {this.setState({ movieslist: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { movieslist, searchfield } = this.state;
    const filteredmovieslist = movieslist.filter(movies =>{
      return movies.name.toLowerCase().includes(searchfield.toLowerCase()) || movies.email.toLowerCase().includes(searchfield.toLowerCase()) || movies.phone.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !movieslist.length ?
      <h1>Loading Movies ...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Movie  Master</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList movieslist={filteredmovieslist} />
          </Scroll>
        </div>
      );
  }
}

export default App;