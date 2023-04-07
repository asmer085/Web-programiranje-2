import React, { Component } from 'react';

class List extends Component {
    state = {  } 
    render() { 
        return (<div>
            <img src={this.props.image} className="personimg person" alt="Greskica"/>
            <div style={{display: 'inline-block',marginLeft: '20px', verticalAlign: 'middle'}}>
                <h4 className="personh4">{this.props.name}</h4> 
            {this.props.age} {"years"}
            </div>
            
        </div>);
    }
}
 
export default List;