import React, { Component } from 'react';
import RowInputNumber from './my-components/RowInputNumber';
import RowInputText from './my-components/RowInputText';
import RowSelect from './my-components/RowSelect';
import RowTextArea from './my-components/RowTextArea';

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
        <RowTextArea propsAux={ ['storyline', 'storyline', storyline, this.handleChange] }>Sinopse</RowTextArea>
        <br />
        <RowInputNumber propsAux={ ['rating', 'rating', rating, this.handleChange] }>Avaliação</RowInputNumber>
        <br />
        <RowSelect propsAux={ ['genre', 'genre', genre, this.handleChange] }>Gênero</RowSelect>
        <br />
        <button type="button" data-testid="send-button" onClick={ this.reset }>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;
