import React, { Component } from 'react';

class RowTextArea extends Component {
  render() {
    const { propsAux: [fieldId, name,  value, handleChange], children } = this.props;
    return (
      <label htmlFor={ fieldId } data-testid={ `${fieldId}-input-label` }>
        { children }
        <textarea
          id={ fieldId }
          name={ name }
          value={ value }
          data-testid={ `${fieldId}-input-label` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
export default RowTextArea;
