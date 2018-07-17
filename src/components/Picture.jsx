import React from 'react';
import { connect } from 'react-redux';
const Picture = (props) => {
  let _imageUrl = null;
  const handleFormSubmit = (e) => {
    const { dispatch } = props
    e.preventDefault();
    console.log(_imageUrl.value);
    _imageUrl.value = '';
  }
  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='file'
          placeholder='Enter a URL'
          ref={(input) => {_imageUrl = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default connect()(Picture);
