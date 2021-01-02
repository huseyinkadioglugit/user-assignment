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

render(){
  return (
    <div className="App">
      <p>This is REACT App with Components!</p>
      <UserInput
      
      > 


      </UserInput>
      <UserOutput
        username= {this.state.persons[0].name}
      ></UserOutput>
      <UserOutput
       username= {this.state.persons[0].name}      
      ></UserOutput>

    </div>
  );
}


}

export default App;
