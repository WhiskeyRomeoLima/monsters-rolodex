import { Component } from "react";
import "./card-list.styles.css"
import CardContainer from '../card-container/card-container.component';
//when importing the default export brackets are not required

class CardList extends Component {
  
  render() {
    const { monsters } = this.props; //destructuring.  also when props change the component rerenders

    return (
      <div className='card-list' >
        {monsters.map((monster) => {
          
          return (
            <CardContainer monster={monster} key={monster.id} />
          );
        }
      )
    }
      </div>
    );
  }
}//end CardList

export default CardList