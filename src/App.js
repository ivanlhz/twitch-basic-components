import React from 'react';
import './App.css';
import Tasks from './components/tasks'

class App extends React.Component {
  regInput = React.createRef()

  state = {
    userName: 'Ivanlhz !!',
    msg:'',
    list: []
  }

  clickHandler = () => {
    const _list = this.state.list;
    _list.push(this.regInput.current.value)

    this.setState({list: _list})
  }

  textChange = (event) => {
    this.setState({msg: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.userName}
          </p>
          <Tasks data={this.state.list} />
          <input ref={this.regInput} type="text" />
          <button type="button" onClick={this.clickHandler}>Guardar elemento</button>
        </header>
      </div>
    );
  }
}

export default App;
