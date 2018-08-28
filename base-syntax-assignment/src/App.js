import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userNames: [
      {userName: "Sepruda"},
      {userName: "EsterMMS"}
    ]
  }

  enterUserNameHandler = (event) => {
    this.setState({
      userNames: [
        {userName: event.target.value},
      ]
    })
  }

  render() {
    const style = {
      padding: "10px",
      font: "Inherit",
      backgroundColor: 'White'
    }

    return (
      <div className="App">
      <UserOutput userName={this.state.userNames[0].userName}/>
      <UserInput style={style} userName={this.state.userNames[0].userName} changed={this.enterUserNameHandler}/>
      </div>
    );
  }
}

export default App;
