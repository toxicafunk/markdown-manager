import React from 'react';
import './App.css';

var md = require('markdown-it')();

class Input extends React.Component {

  onChange(event) {
    this.props.onBlur(event.target.value);
  }

  render() {
    return <div>
        <textarea onChange={this.onChange.bind(this)}/>
      </div>
  }
}

/*
 * Props -> ReactComponents
 *
 * Props = Map
 *
 * State -> ReactComponents
 *
 * State -> View
 **/

class Viewer extends React.Component {
  render() {
      return <div>You typed:
        <span dangerouslySetInnerHTML={{__html:this.props.text}} />
      </div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {typed: ''};
  }

  handleBlur= (text) => {
    var mdText = md.render(text)
    this.setState({typed: mdText});
  }

  render() {
    return (
      <div className="App">
        <Input onBlur={this.handleBlur} />
        <Viewer text={this.state.typed}/>
    </div>
    );
  }
}

export default App;
