import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'

class App extends Component {

  state = {
      length: 0,
      text: []
  };

  showCharHandler = (value) => {
      this.setState({
          length: value.length | null,
          text: value.split('')
      })
  };

  removeElementHandler = (index) => {
        let text = this.state.text;
        const removed = text.splice(index, 1);

        this.setState({
          text: text
        })

  };

  render() {
      const char = this.state.text,
            showChar = char.map((element, index) =>
                        <CharComponent key={index} click={(event) => this.removeElementHandler(index)}>{element}</CharComponent>
            );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          {/* zrobione*/}
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            {/* zrobione*/}
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            {/* zrobione*/}
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>

            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            {/* zrobione*/}
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

          <input type="text"  onChange={(event) => this.showCharHandler(event.target.value)} />
          <ValidationComponent>{this.state.length}</ValidationComponent>
          {showChar}
      </div>
    );
  }
}

export default App;
