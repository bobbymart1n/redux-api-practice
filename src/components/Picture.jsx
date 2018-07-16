import React from 'react';

class Picture extends React.Component {
  handleFormSubmit(e) {
    e.preventDefault();
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit()}>
          <input
            type='text' />
        </form>
      </div>
    )
  }
}

export default Picture;
