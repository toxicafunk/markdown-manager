import React from 'react';

class Viewer extends React.Component {
  render() {
      return <div>You typed:
        <span dangerouslySetInnerHTML={{__html:this.props.text}} />
      </div>
  }
}

export default Viewer;
