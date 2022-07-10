import React, { Component } from 'react';
import {
  SearchbarWrap,
  InputWrap,
  SearchFormInput,
  Title,
} from './Searchbar.styled';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    inputName: '',
  };
  // забираем дату с инпута и бросаем в стейт
  handleNameChange = e => {
    this.setState({ inputName: e.currentTarget.value.toLowerCase() });
  };
  // передаем в апп то что ввели в инпут
  handleSubmit = e => {
    e.preventDefault();
    const userInput = this.state.inputName.trim();
    if (userInput === '') {
      toast.error('fill in the fields');
      return;
    }
    this.props.onSubmitForm(this.state.inputName);
    // очищаем инпут
    this.cleanInput();
  };
  // фун. очистки полей
  cleanInput = () => {
    this.setState({ inputName: '' });
  };

  render() {
    const name = this.props.searchName;
    return (
      <SearchbarWrap>
        <Title>{name}</Title>
        <form onSubmit={this.handleSubmit}>
          <InputWrap>
            <SearchFormInput
              type="text"
              autoComplete="off"
              value={this.state.inputName}
              onChange={this.handleNameChange}
              // autoFocus
              placeholder="Search images and photos"
            />
            <div>
              <span></span>
            </div>
            <button type="submit">
              <span>Finde</span>
            </button>
          </InputWrap>
        </form>
      </SearchbarWrap>
    );
  }
}

export default Searchbar;
