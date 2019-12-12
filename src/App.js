import React from 'react';
import './App.css';
import Editor from './components/editor'
import Viewer from './components/viewer'
import ImportFromFileBody from './components/importFromFileBody'

var md = require('markdown-it')();

const CapViewer = Viewer

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {typed: ''};
  }

  handleBlur = (text) => {
    this.setState({typed: text});
  }

  handleUpload = (text) => {
    this.setState({typed: text});
  }

  render() {
    return (
      <div className="App">
        <ImportFromFileBody onUpload={this.handleUpload}/>
        <Editor onBlur={this.handleBlur} />
        <Viewer text={md.render(this.state.typed)} />
        <CapViewer text={this.state.typed.toUpperCase()} />
    </div>
    );
  }
}

export default App;
