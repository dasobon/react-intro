import React, { Component } from 'react';
import { render } from 'react-dom';
import {Checkbox} from './Checkbox'
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      age: '26',
      color: 'red',
      loading: true,
      users: undefined
    };

    this.loadData()
  }

  loadData = () => {
    this.setState({loading: true})
    setTimeout(() => {
      const users = [{name: 'ada', age: 22}, {name: 'jozek', age: 26}, {name: 'ela', age: 16}]
      this.setState({ users, loading: false })
    },3000)
  }

  setColor = (isChecked) => {
    const color = isChecked ? 'red' : 'green'
    //tylko na głównym piętrze nie trzeba dawać ...this.state
    this.setState({...this.state, color})
  }

  render() {
      const names = ['jozek', 'franek', 'antek', 'Brajan']
      //  const users = [{name: 'ada', age: 22}, {name: 'jozek', age: 26}, {name: 'ela', age: 16}]


      // const helloComponents = names.map(name => <Hello name={name}/>)

      return <div style={ {color: this.state.color} }>
      <Checkbox onChange={this.setColor} id="kolor" label={"czy czerwono"}/>
        <Hello name={this.state.name} age={this.state.age}/>
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.loadData}>refresh</button>
        {this.state.loading && 'loading...'}
        {this.state.users &&
        <>
          {names.map(name=><Hello name={name}/>)}
          {this.state.users.map(user=> <Hello {...user}/>)}
          {this.state.users.map(user=> <Hello user={user}/>)}
          {this.state.users.map(({name, age})=><Hello name={name} age={age}/>)}
        </>
        }
      </div>
  }
}

render(<App />, document.getElementById('root'));
