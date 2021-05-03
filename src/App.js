import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import movies from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="sd"
        onSearchTextChange={}
        bookmarkedOnly={}
        onBookmarkedChange={}
        selectedGenre=""
        onSelectedGenreChange={}
      />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
