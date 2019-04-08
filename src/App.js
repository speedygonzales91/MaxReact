import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'sdasad', name: 'Max', age: 28 },
      {id: 'dfdsfu', name: 'Manu', age: 29 },
      {id: 'gdgfsg', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p=>
      {return p.id === personId});

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {persons : persons}
    )

    /*
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } ) */
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons : !doesShow }
    )
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState(
      {persons : persons}
      )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return <Person 
               name={person.name}
               age ={person.age}
               click = {()=>this.deletePersonHandler(personIndex)}
               key= {person.id}
               changed = {(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
      </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          //onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
