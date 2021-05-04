import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RowTextArea extends Component {
  render() {
    const { propsAux: [fieldId, name, value, handleChange], children } = this.props;
    return (
      <label htmlFor={ fieldId } data-testid={ `${fieldId}-input-label` }>
        { children }
        <textarea
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

RowTextArea.propTypes = {
  propsAux: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,

  children: PropTypes.string.isRequired,
};

export default RowTextArea;
