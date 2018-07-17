import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = (props) => {

  return (
    <div>
      <ul>
        <li>Hops:</li>
        <ul>
          {props.hops.map((hopType) => {
            <li>{hopType.name}</li>
          })}
        </ul>

      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  hops: PropTypes.array
}
// {Object.keys(props.ingredientsList).map((ingredientId) => {
//   let ingredient = props.ingredientsList[ingredientId];
//   const { hops, malts, yeast } = ingredient.data.ingredients;
//   return hops.map((hop) => {
//     return <ul>
//       <li>{hop.name}, {hop.amount.value} {hop.amount.unit}</li>
//     </ul>
//   });
// })}
export default Ingredients;
