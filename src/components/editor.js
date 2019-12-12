import React from 'react';

class Editor extends React.Component {

  onChange(event) {
    this.props.onBlur(event.target.value);
  }

  render() {
    return <div>
        <textarea onChange={this.onChange.bind(this)}/>
      </div>
  }
}

export default Editor;
