import React, { Component } from 'react';

class RowInputNumber extends Component {
  render() {
    const { propsAux: [fieldId, name,  value, handleChange], children } = this.props;
    return (
      <label htmlFor={ fieldId } data-testid={ `${fieldId}-input-label` }>
        { children }
        <input
          type="number"
          id={ fieldId }
          name={ name }
          value={ value }
          data-testid={ `${fieldId}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
export default RowInputNumber;
