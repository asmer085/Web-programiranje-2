//import React from 'react';
import React, { Component } from 'react';
import List from './List'


class Lists extends Component {
  state = { lista : [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ]  } 

  handleButton = () =>{
    const lista = [];
    this.setState({lista});
  }

  render() { 
  
    return (
      <div className="grid">
        <div className="container">
          <h3 className="containerh3">5 BIRTHDAYS TODAY!</h3>
          {this.state.lista.map(likovi =>(
            <List key={likovi.id} name={likovi.name} age={likovi.age} image={likovi.image} />
        ))}
          <button onClick={this.handleButton}>Clear all</button>
        </div>
      </div>
      
    );
  }
}
 
export default Lists ;
