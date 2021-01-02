import { Component } from 'react';
import './App.css';
import  UserOutput  from "./User/UserOutput/UserOutput";
import UserInput from "./User/UserInput/UserInput";





class App extends Component {


  state = {
    
    username : 'Huseyin'
    
  }

nameChangedHandler = (event) => {
  this.setState({username: event.target.value});
}

render(){
  return (
    <div className="App">
      <p>This is REACT App with Components!</p>
      <UserInput
      currentName= {this.state.username}
       changed = {this.nameChangedHandler}
      > 


      </UserInput>
      <UserOutput
        username= {this.state.username}
      ></UserOutput>
      <UserOutput
       username= {this.state.username}      
      ></UserOutput>

    </div>
  );
}


}

export default App;
