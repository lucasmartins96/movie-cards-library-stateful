import React, { Component } from 'react';

class RowInputText extends Component {
  render() {
    const { propsAux: [fieldId, name,  value, handleChange], children } = this.props;
    return (
      <label htmlFor={ fieldId } data-testid={ `${fieldId}-input-label` }>
        { children }
        <input
          type="text"
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
export default RowInputText;
