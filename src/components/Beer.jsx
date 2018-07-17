import React from 'react';
import Ingredients from './Ingredients';
import { connect } from 'react-redux';
import { fetchBeer } from './../actions';
import PropTypes from 'prop-types';

const Beer = (props) => {
  const handleButtonClick = () => {
    const { dispatch } = props;
    dispatch(fetchBeer());
  }
  return(
    <div>
      <h1>Click to get a new Beer</h1>
      <button onClick={handleButtonClick} type='submit'>Submit</button>
      {Object.keys(props.ingredients).map((ingredientId) => {
        let ingredient = props.ingredients[ingredientId];
        <Ingredients
          hops={ingredient.data.ingredients.hops}/>
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state
  }
}

Beer.propTypes = {
  ingredients: PropTypes.object
}

export default connect(mapStateToProps)(Beer);
