import { Component } from 'react';
import './App.css';
import  UserOutput  from "./User/UserOutput/UserOutput";
import UserInput from "./User/UserInput/UserInput";





class App extends Component {


  state = {
    persons : [
      {username : 'Huseyin'}
    ]
  }

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Melisa'}
    ]
  })
}

render(){
  return (
    <div className="App">
      <p>This is REACT App with Components!</p>
      <UserInput
      username= {this.state.persons[0].username}
       changed = {this.nameChangedHandler}
      > 


      </UserInput>
      <UserOutput
        username= {this.state.persons[0].username}
      ></UserOutput>
      <UserOutput
       username= {this.state.persons[0].username}      
      ></UserOutput>

    </div>
  );
}


}

export default App;
