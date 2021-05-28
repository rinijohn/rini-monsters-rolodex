import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list-components'
import { SearchBox } from './components/search-box/search-box-component'
import './App.css';

// function App() {
//   return (<h1>Rini John</h1>);
// }
class App extends Component {
constructor(){
  super();

  this.state = {
    monsters : [],
    searchTerm : ''
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}))
}

handleChange = e =>{
  this.setState({searchTerm : e.target.value})
}

render() {
  // console.log(this.state.monsters);
  const { monsters , searchTerm } = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
  <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox
      placeholder="search monsters"
      handleChange={this.handleChange}
    />
    <CardList monsters={filteredMonsters}></CardList>
  </div>
  );
  }
}
export default App;
