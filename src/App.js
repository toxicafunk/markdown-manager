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
    this.state = {typed: '', mdname: ''};
  }

  handleReset = () => {
    this.setState({typed: ""});
  }

  handleBlur = (text) => {
    this.setState({typed: text});
  }

  handleUpload = (text) => {
    this.setState({typed: text});
  }

  handleSave = () => {
    localStorage.setItem(this.state.mdname, JSON.stringify(this.state.typed))
  }

  handleLoad = () => {
    this.setState({typed: JSON.parse(localStorage.getItem(this.state.mdname))})
  }

  handleSetName = (name) => {
    this.setState({mdname: name});
  }

  render() {
    return (
      <div className="App">
        <ImportFromFileBody onUpload={this.handleUpload}/>
        <Editor onBlur={this.handleBlur} onReset={this.handleReset} onSave={this.handleSave}
           onSetName={this.handleSetName} onLoad={this.handleLoad} text={this.state.typed} />
        <Viewer text={md.render(this.state.typed)} />
        <CapViewer text={this.state.typed.toUpperCase()} />
    </div>
    );
  }
}

export default App;
