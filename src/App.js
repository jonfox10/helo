import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav'
import routes from './routes';


class App extends Component {
  constructor (){
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
      <h1>Helo</h1>
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
