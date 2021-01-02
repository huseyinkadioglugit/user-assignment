import { Component } from 'react';
import './App.css';
import  UserOutput  from "./User/UserOutput";
import UserInput from "./User/UserInput";





class App extends Component {

render(){
  return (
    <div className="App">
      <p>This is REACT App with Components!</p>
      <UserInput />
      <UserOutput/>

    </div>
  );
}


}

export default App;
