import {Component} from 'react'
import './search-box.styles.css'
class SearchBox extends Component {

  render()
  {
    return (
      <input
        type="search"
        className={this.props.className}
        placeholder={this.props.placeholder }
        onChange={this.props.onChange} //end onChange
      />      
    )
  } //end render
} //end SearchBox class

export default SearchBox;

