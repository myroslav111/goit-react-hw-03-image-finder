import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import ErrorMessageViev from './ErrorMessageView';
import pixabayApi from './services/pixabay-api.js';
import { MainWrap } from './App.styled';
import { Text } from './ImageGallery/ImageGallery.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    pictures: [],
    name: '',
    page: 1,
    largeImageURL: '',
    loader: true,
    error: null,
  };
  /* work with request for gallery */
  // проверяем было ли изменение запроса если да то делаем новый запрос
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
    const nextName = this.state.name;
    const pageNum = this.state.page;
    const prevNumPage = prevState.page;
    //если запросили нового персонажа очищаем дом перед рендером нового запроса
    if (prevName !== nextName) {
      this.setState({ pictures: [] });
    }
    // проверка на изменение пропсов и стейта текущего и прошлого
    if (prevName !== nextName || prevNumPage !== pageNum) {
      this.setState({ error: null });
      pixabayApi
        .fetchPage(nextName, pageNum)
        .then(arrOfImg => {
          if (arrOfImg.hits.length === 0) {
            this.setState({ loader: true });
            return Promise.reject(
              new Error(toast.error(`not found ${nextName}`))
            );
          }
          this.setState(({ pictures, status }) => ({
            pictures: [...pictures, arrOfImg.hits],
          }));
        })
        .catch(error => this.setState({ error: error.message }));
    }
  }

  //фун. делаем масив изображений для галереи
  makeArrImgForGallery = () => {
    const newPictures = this.state.pictures;
    return newPictures.flatMap(e => e);
  };

  // забираем дату с инпута при сабмите
  handleFormSubmit = name => {
    this.setState({ name: name, page: 1, loader: false });
  };

  // фун. для подгрузки фото
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  /* metod for modal */
  // берем урл большого фото для модалки при клике на пейджу
  getPhotoForModal = e => {
    console.log();
    const idCurrentImg = Number(e.target.id);
    const pageForModal = this.state.pictures
      .flatMap(e => e)
      .find(page => idCurrentImg === Number(page.id));
    this.setState({ largeImageURL: pageForModal.largeImageURL });
  };

  // фун закрытия модалки
  handleBakcdropClick = e => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { name, loader, largeImageURL, error } = this.state;
    const listOfPictures = this.makeArrImgForGallery();

    return (
      <MainWrap>
        <Searchbar
          onSubmitForm={this.handleFormSubmit}
          searchName={name || 'Start your search'}
        />

        {loader && <Text>Start your search</Text>}
        {error && <ErrorMessageViev />}

        <ImageGallery
          pageList={listOfPictures}
          pictureForModal={this.getPhotoForModal}
        />
        {largeImageURL && (
          <Modal
            urlPhoto={largeImageURL}
            closeModal={this.handleBakcdropClick}
          />
        )}
        {!loader ? <Button onChengePage={this.loadMore} /> : <Loader />}
        <ToastContainer autoClose={3000} />
      </MainWrap>
    );
  }
}
export default App;
