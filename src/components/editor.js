import React from 'react';

class Editor extends React.Component {

  onChange(event) {
    this.props.onBlur(event.target.value);
  }

  onClick() {
    this.props.onReset();
  }

  onSave() {
    this.props.onSave();
  }

  onLoad() {
    this.props.onLoad();
  }

  onSetName(event) {
    this.props.onSetName(event.target.value);
  }

  render() {
    return <div>
      <textarea onChange={this.onChange.bind(this)} value={this.props.text}  rows="30" cols="90"/>
      <button onClick={this.onClick.bind(this)}>RESET</button>
      <input name="mdname" onChange={this.onSetName.bind(this)} type="text" placeholder="Enter a name..." minLength="4" maxLength="8" size="10" />
      <button onClick={this.onSave.bind(this)}>SAVE</button>
      <button onClick={this.onLoad.bind(this)}>LOAD</button>
      </div>
  }
}

export default Editor;
