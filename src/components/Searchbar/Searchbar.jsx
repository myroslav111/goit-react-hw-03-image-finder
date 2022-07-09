import React, { Component } from 'react';
import { SearchbarWrap, InputWrap, SearchFormInput } from './Searchbar.styled';
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
    // console.log(this.state.inputName.trim() === '');
    if (this.state.inputName.trim() === '') {
      toast.error('Wow so easy!');
      return;
    }
    this.props.onSubmitForm(this.state.inputName);
    this.setState({ inputName: '' });
  };

  render() {
    return (
      <SearchbarWrap>
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
