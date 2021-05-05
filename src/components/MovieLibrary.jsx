import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  addMovie = (newMovie) => {
    this.setState((prevState) => (
      { movies: prevState.movies.concat(newMovie) }
    ));
  }

  // Créditos ao instrutor Eduardo por me auxiliar na lógica dessa função
  filterAll = () => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    const filteredMovies = movies.filter(
      ({ title, subtitle, storyline, bookmarked, genre }) => {
        let activeFilter = true;
        if (bookmarkedOnly) {
          activeFilter = activeFilter && bookmarked;
        }
        if (selectedGenre) {
          activeFilter = activeFilter && genre === selectedGenre;
        }
        if (searchText) {
          const regex = new RegExp(searchText, 'gi');
          activeFilter = activeFilter && (
            regex.test(title) || regex.test(subtitle) || regex.test(storyline)
          );
        }
        return activeFilter;
      },
    );
    this.setState({ movies: filteredMovies });
  }

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value }, this.filterAll);
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked }, this.filterAll);
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({ selectedGenre: value }, this.filterAll);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
