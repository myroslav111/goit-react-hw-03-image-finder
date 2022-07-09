import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryBox, Text } from './ImageGallery.styled';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';
import ErrorMessageViev from 'components/ErrorMessageView/ErrorMessageView';
import pixabayApi from '../services/pixabay-api';
// import ErrorMessageView from './ErrorMessageView';
// import { nanoid } from 'nanoid';

// const ImageGallery = ({ items, onCloseOpenModal }) => {
//   return (
//     <ImageGalleryBox>
//       {items.map(({ webformatURL, id }) => (
//         <ImageGalleryItem
//           key={id}
//           item={webformatURL}
//           id={id}
//           onCloseOpenModal={onCloseOpenModal}
//         />
//       ))}
//     </ImageGalleryBox>
//   );
// };

class ImageGallery extends Component {
  state = {
    idx: null,
    showModal: false,
    pictures: null,
    searchName: '',
    // loading: false,
    error: null,
    status: 'idle',
  };
  // проверяем было ли изменение запроса если да то делаем новый запрос
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;
    // console.log('>', prevName);
    // console.log(nextName);
    // console.log(prevName !== nextName);

    if (prevName !== nextName) {
      // this.setState({ loading: true, pictures: null });
      this.setState({ status: 'pending' });
      // console.log('change');

      pixabayApi
        .fetchPage(nextName)
        // fetch(
        //   `https://pixabay.com/api/?key=23788919-1e868a4f1ae72234cc449d190&q=${nextName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
        // )
        //   .then(res => res.json())
        // .then(pictures => this.setState({ pictures }))
        .then(pictures => {
          if (pictures.hits.length === 0) {
            return Promise.reject(
              new Error(toast.error(`not found ${nextName}`))
            );
          }
          this.setState({ pictures, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
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
    // машина состояния
    if (status === 'idle') {
      return <Text>Start to search</Text>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolved') {
      return (
        <ImageGalleryBox>
          {pictures.hits.map(({ webformatURL, id, tags }) => (
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
              img={pictures.hits}
              onCloseOpenModal={this.toggleModal}
              currentId={idx}
            />
          )}
        </ImageGalleryBox>
      );
    }
    if (status === 'rejected') {
      return <ErrorMessageViev />;
    }
  }
}

export default ImageGallery;

// return (
//   <ImageGalleryBox>
//     {/* {error && toast.error('Wow so easy!')} */}
//     {/* {this.state.loading && <Loader />} */}
//     {/* {!this.state.pictures && <Loader />} */}
//      {pictures &&
//       pictures.hits.map(({ webformatURL, id }) => (
//         <ImageGalleryItem
//           key={id}
//           item={webformatURL}
//           id={id}
//           onCloseOpenModal={this.toggleModal}
//         />
//       ))}
//     {showModal && (
//       <Modal
//         img={pictures.hits}
//         onCloseOpenModal={this.toggleModal}
//         currentId={idx}
//       />
//     )}
//   </ImageGalleryBox>
// );
