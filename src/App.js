import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends React.Component {
  constructor(){
    super()
    this.state={name:""}
  }
change = (e)=>{
this.setState({name:document.querySelector('input').value})

}

  render(){
    console.log('name',this.state.name)
    return(
      <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text"  placeholder="your name"/>
        <button onClick={this.change}>click</button>
      </header>
    </div>
    )
  }
}
export default App;
