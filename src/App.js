import React from 'react';
import './App.css';
import image from './image.jpg';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "red"
    }
  }
  render() {
    return (
      <div className='body'>
        <h1>Farewell 2020</h1>
        <img src={image} alt="image" width="600px" height="400px" />
      </div>
    );
  }
}


export default App;
