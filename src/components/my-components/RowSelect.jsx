import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RowSelect extends Component {
  render() {
    const { propsAux: [fieldId, name, value, handleChange], children } = this.props;
    return (
      <label htmlFor={ fieldId } data-testid={ `${fieldId}-input-label` }>
        { children }
        <select
          id={ fieldId }
          name={ name }
          value={ value }
          data-testid={ `${fieldId}-input` }
          onChange={ handleChange }
        >
          <option value="action" data-testid={ `${fieldId}-option` }>Ação</option>
          <option value="comedy" data-testid={ `${fieldId}-option` }>Comédia</option>
          <option value="thriller" data-testid={ `${fieldId}-option` }>Suspense</option>
        </select>
      </label>
    );
  }
}

RowSelect.propTypes = {
  propsAux: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,

  // [fieldId, name,  value, handleChange],
  children: PropTypes.string.isRequired,
};

export default RowSelect;
