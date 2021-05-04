import React, { Component } from 'react';

class RowInputText extends Component {
  render() {
    const { propsAux: [fieldId, value, handleChange], children } = this.props;
    return (
      <label htmlFor={ fieldId } data-testid={ `${fieldId}-input-label` }>
        { children }
        <input
          type="text"
          id={ fieldId }
          name={ fieldId }
          value={ value }
          data-testid={ `${fieldId}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
export default RowInputText;
