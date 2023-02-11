import {Component} from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


//* See previous versions below the App class
class App extends Component {
  constructor() {
    super();
    //using key-value pairs to create an object to use as state
    //when state changes app rerenders. Only when the state object is a completely
    this.state = {
      monsters: [],
      searchField: '',
    }
  } //end constructor
/* //* this.state preferred syntax for setting state
  //* Important to maintain a synchronus like restult
              (updater function)                    (callback function to run after updater finishes)
this.setState((state, props) => {return {updates}, () => {})
What set state does under the hood is that it's actually 
updating state to a different object and 
react once it detects state is now a different object in memory,
That is the moment react will be like, Oh, okay, it's time to update

*/
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => { return { monsters: users }; }, // object destructuring
          //() => console.log(this.state) //optional callback function to run after setting state          
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

class appPreviousversion1 extends Component {
  constructor() {
    super();

    this.state = {
      monster1: {name: 'Linda'},
      monster2: {name: 'Frank'},
      monster3: {name: 'Jacky'},
      monster4: {name: 'Willy'},     
    }
  } //end constructor

  render() {
    return (
      <div className='App'>
          <h1>{this.state.monster1.name}</h1>
          <h1>{this.state.monster2.name}</h1>
          <h1>{this.state.monster3.name}</h1>
          <h1>{this.state.monster4.name}</h1>
      </div>
    )
  }


 } //end class

 class appPreviousversion2 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {id: 1, name: 'Linda'}, //needed to help react optimize and distinquish uniqueness by key value anytime a list of items is displayed
        {id: 2, name: 'Frank'}, //when only one item needs updating only that list item is re-rendered
        {id: 3, name: 'Jacky'},
        {id: 4, name: 'Willy'},
    ]
     
    }
  } //end constructor

  render() {
    return (
      <div className='App'>
          {this.state.monsters.map(
            (monster) => {
              return <div>key={monster.id} <h1>{monster.name}</h1></div>
            }
          )
          }
      </div>
    )
  }


 } //end class