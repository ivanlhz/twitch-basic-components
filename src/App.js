import React from 'react';
import './App.css';
import Tasks from './components/tasks'

class App extends React.Component {
  regInput = React.createRef()

  state = {
    title: 'Lista de la compra',
    editMode: false,
    editElement: undefined,
    list: []
  }

  clickHandler = () => {
    if (this.state.editMode && this.state.editElement) {
      this.updateList(this.state.editElement)
    } else {
      const _list = [...this.state.list];
      _list.push({id: Math.random().toString() ,value:this.regInput.current.value})
  
      this.setState({list: _list})
    }
    this.regInput.current.value = ''
  }

  updateList = (element) => {
    let _list = [...this.state.list]
    const index = _list.findIndex( e => e.id === element.id )
    _list[index] = {..._list[index], value: this.regInput.current.value}
    this.setState({list: _list, editMode: false, editElement: undefined})
  }

  clickListElementHandle = (ele) => {
    let _list = [...this.state.list]
    _list = _list.filter( e => ele.id !== e.id)
    this.setState({list: _list})
  }

  textChange = (event) => {
    this.setState({msg: event.target.value})
  }

  editHandle = (elemento) => {
    this.regInput.current.value = elemento.value
    this.setState({editMode: true, editElement:elemento})
  }

  doneHandle = (id) => {
    let _list = [...this.state.list]
    const index = _list.findIndex( e => e.id === id )
    _list[index] = {..._list[index], done: true}
    this.setState({list: _list})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {this.state.title}
          </h1>
          <Tasks data={this.state.list}
           onRemove={this.clickListElementHandle} 
           onDone={this.doneHandle} 
           onEdit={this.editHandle}
           />
          <input ref={this.regInput} type="text" />
          <button type="button" onClick={this.clickHandler}>{this.state.editMode ? 'Actualizar': 'Añadir'}</button>
        </header>
      </div>
    );
  }
}

export default App;
