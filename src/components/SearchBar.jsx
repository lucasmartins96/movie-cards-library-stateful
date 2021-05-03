import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onSearchTextChange } />
        </label>
      </form>
    );
  }
}
export default SearchBar;
