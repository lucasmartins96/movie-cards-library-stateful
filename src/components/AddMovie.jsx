import React, { Component } from 'react';
import RowInputText from './my-components/RowInputText';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  reset = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <RowInputText propsAux={ ['title', 'title', title, this.handleChange] }>Título</RowInputText>
        <br />
        <RowInputText propsAux={ ['subtitle', 'subtitle', subtitle, this.handleChange] }>Subtítulo</RowInputText>
        <br />
        <RowInputText propsAux={ ['image', 'imagePath', imagePath, this.handleChange] }>Imagem</RowInputText>
        <br />
        <label htmlFor="image" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="image"
            type="text"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          >
          </textarea>
        </label>
        <br />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <br />
        <button type="button" data-testid="send-button" onClick={ this.reset }>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;
