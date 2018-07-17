import React from 'react';
import Ingredients from './Ingredients';
import { connect } from 'react-redux';
import { fetchBeer } from './../actions';
import PropTypes from 'prop-types';

class Beer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBeer());
  }
  render() {
    return(
      <div>
        <h1>Click to get a new Beer</h1>
        {Object.keys(this.props.ingredients).map((ingredientId, index) => {
          let ingredient = this.props.ingredients[ingredientId];
          return <Ingredients
                    hops={ingredient.data.ingredients.hops}
                    malts={ingredient.data.ingredients.malt}
                    yeast={ingredient.data.ingredients.yeast}
                    key={index} />
        })}
      </div>
    )
  }
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
