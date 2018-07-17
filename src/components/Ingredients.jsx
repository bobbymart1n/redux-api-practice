import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = (props) => {
  return (
    <div>
      <ul>
        <li>Hops:
          <ul>
            {props.hops.map((hopType, index) => {
              return <li key={index}>{hopType.name}</li>
            })}
          </ul>
        </li>
        <li>Malts:
          <ul>
            {props.malts.map((maltType, index) => {
              return <li key={index}>{maltType.name}</li>
            })}
          </ul>
        </li>
        <li>Yeast: {props.yeast}</li>
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  hops: PropTypes.array,
  malts: PropTypes.array,
  yeast: PropTypes.string
}
export default Ingredients;
