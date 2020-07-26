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
              <p>
                We are waiting<br />
                <a href={url}>Join us here!</a>
              </p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
