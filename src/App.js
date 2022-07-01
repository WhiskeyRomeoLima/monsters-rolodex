import {Component} from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    //using keys supplied by database 
    //when state changes app rerenders
    this.state = {
      monsters: [],
      searchField: '',
    }
  } //end constructor

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => { return { monsters: users }; }, //desctructuring
        )
      })
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });   
  }


  render() {
    //destructuring to simplify code by removing this eg. this.state.monster --> monster.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
    (monster) => {
      return monster.name.toLocaleLowerCase().startsWith(searchField);
    }
    )

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChange={onSearchChange} placeholder={'search-monsters'} className="search-box" />
        <CardList monsters={filteredMonsters} />
      </div>
    ); //end return
  } //end render
} //end of class App

export default App;


  //refactored from App.js replaced by <CardList /> as separate component
  //single purpose rule.  See src/components/card-list/card-listcomponent.jsx
  /* {filteredMonsters.map((monster) => {
  return (
    <div key={monster.id}>
      <h1>{monster.name}</h1>
    </div>
  );
})}  */


/* also refactored from app.js
<input
  type="search"
  className='search-box'
  placeholder='search Monsters'
  onChange={onSearchChange} //end onChange
/>
*/