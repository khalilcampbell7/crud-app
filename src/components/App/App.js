import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import businessData from '../../mockData/mockBusinesses.json'


const businesses = businessData;

class App extends React.Component {
  render(){
    
    return(
      <div className="App">
       <h1>Love Handles</h1>
       <SearchBar />
        <BusinessList businesses={businesses} />
    </div>
    )
  }
}

export default App;
