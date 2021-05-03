import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    const INITIAL_STATE = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = INITIAL_STATE;
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        
      </form>
    );
  }
}
export default AddMovie;
