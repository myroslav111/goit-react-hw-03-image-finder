import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryBox, Text } from './ImageGallery.styled';
import Modal from 'components/Modal';
import { toast } from 'react-toastify';
import ErrorMessageViev from 'components/ErrorMessageView/ErrorMessageView';
import pixabayApi from '../services/pixabay-api';

class ImageGallery extends Component {
  state = {
    idx: null,
    showModal: false,
    pictures: [],
    error: null,
    status: 'idle',
    page: 1,
  };
  // проверяем было ли изменение запроса если да то делаем новый запрос
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;
    const pageNum = this.props.numPage;
    //если запросили нового персонажа очищаем дом перед рендером нового запроса
    if (prevName !== nextName) {
      this.setState({ pictures: [] });
    }
    // проверка на изменение пропсов и стейта текущего и прошлого
    if (prevName !== nextName || prevProps.numPage !== this.props.numPage) {
      pixabayApi
        .fetchPage(nextName, pageNum)
        .then(picturess => {
          if (picturess.hits.length === 0) {
            return Promise.reject(
              new Error(toast.error(`not found ${nextName}`))
            );
          }
          this.setState(({ pictures, status }) => ({
            pictures: [...pictures, picturess.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(this.props.toggle());
    }
  }

  // фун. открыти закрития модалки
  toggleModal = e => {
    if (!this.state.showModal) {
      this.setState(({ idx }) => ({
        idx: e.target.id,
      }));
    }
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, idx, showModal, status } = this.state;
    const newPictures = pictures.flatMap(e => e);
    // машина состояния
    if (status === 'idle') {
      return <Text>Start your search</Text>;
    }
    //  когда все гуд
    if (status === 'resolved') {
      return (
        <ImageGalleryBox>
          {newPictures.map(({ webformatURL, id, tags }) => (
            <ImageGalleryItem
              key={id}
              item={webformatURL}
              id={id}
              describe={tags}
              onCloseOpenModal={this.toggleModal}
            />
          ))}
          {showModal && (
            <Modal
              img={newPictures}
              onCloseOpenModal={this.toggleModal}
              currentId={idx}
            />
          )}
        </ImageGalleryBox>
      );
    }
    // когда чет пошло не так вернулся кривой респонс с бека
    if (status === 'rejected') {
      return <ErrorMessageViev />;
    }
  }
}

export default ImageGallery;
