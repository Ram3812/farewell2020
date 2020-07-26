import React from 'react';
import './App.css';
import lapimage from './lapimage.jpg';

const url = "https://meet.google.com/cck-zfsk-aou";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "red"
    }
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className='content'>
            <center>
            <a href={url}>We are waiting<br />Join us here!</a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
