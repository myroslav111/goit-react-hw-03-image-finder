import React, { Component } from 'react';
import Button from './Button';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import { MainWrap } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    name: '',
    page: 1,
    loader: true,
    visibleBtn: false,
  };

  // забираем дату с инпута при сабмите
  handleFormSubmit = name => {
    this.setState({ name: name, page: 1, loader: false });
  };

  // тогл лоадера и кнопки подгрузки
  toggle = () => {
    this.setState(prevState => ({
      loader: !prevState.loader,
    }));
  };

  // фун. подгрузки фото
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { name, page, loader } = this.state;

    return (
      <MainWrap>
        <Searchbar
          onSubmitForm={this.handleFormSubmit}
          searchName={name || 'Start your search'}
        />
        <ImageGallery
          searchName={name}
          numPage={page}
          toggle={this.toggle}
          onChengePage={this.loadMore}
        />
        {!loader ? <Button onChengePage={this.loadMore} /> : <Loader />}
        <ToastContainer autoClose={3000} />
      </MainWrap>
    );
  }
}

export default App;
