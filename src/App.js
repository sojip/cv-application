import { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="content">
        <Nav />
        <Form />
      </div>     
    ); 
  }   
}

export default App;
