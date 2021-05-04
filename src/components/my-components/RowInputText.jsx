import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RowInputText extends Component {
  render() {
    const { propsAux: [fieldId, name, value, handleChange], children } = this.props;
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

RowInputText.propTypes = {
  propsAux: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,

  // [fieldId, name,  value, handleChange],
  children: PropTypes.string.isRequired,
};

export default RowInputText;
