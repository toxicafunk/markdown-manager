import React from 'react';
import axios from 'axios';
import './App.css';
import Editor from './components/editor'
import Viewer from './components/viewer'
import ImportFromFileBody from './components/importFromFileBody'

var md = require('markdown-it')();

const CapViewer = Viewer

const client = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 3000,
});

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
    localStorage.setItem(this.state.mdname, JSON.stringify(this.state))
  }

  handleLoad = () => {
    var item = JSON.parse(localStorage.getItem(this.state.mdname));
    this.setState({typed: item.typed})
  }

  handleSetName = (name) => {
    this.setState({mdname: name});
  }

  handleSend = () => {
    var j = { mdname: this.state.mdname, typed: md.render(this.state.typed)}
    client.post("/create", j)
      .then(res => {
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="App">
        <ImportFromFileBody onUpload={this.handleUpload}/>
        <Editor onBlur={this.handleBlur} onReset={this.handleReset} onSave={this.handleSave}
      onSetName={this.handleSetName} onLoad={this.handleLoad} onSend={this.handleSend} text={this.state.typed} />
        <Viewer text={md.render(this.state.typed)} />
        <CapViewer text={this.state.typed.toUpperCase()} />
    </div>
    );
  }
}

export default App;
