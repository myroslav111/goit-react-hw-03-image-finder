import React, { Component } from 'react';
// import Button from './Button';
// import Loader from './Loader';
// import ImageGallery from './ImageGallery';
import ImageGallery from './ImageGallery';
import { MainWrap } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from './Modal';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    pictures: null,
    // showModal: false,
    // idx: null,
    name: '',
  };

  componentDidMount() {
    // fetch(
    //   'https://pixabay.com/api/?key=23788919-1e868a4f1ae72234cc449d190&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1'
    // )
    //   .then(res => res.json())
    //   .then(pictures => this.setState({ pictures }));
  }
  // забираем дату с инпута при сабмите
  handleFormSubmit = name => {
    // console.log(name);
    this.setState({ name: name });
  };
  // фун. открыти закрития модалки
  // toggleModal = e => {
  //   if (!this.state.showModal) {
  //     this.setState(({ idx }) => ({
  //       idx: e.target.id,
  //     }));
  //   }
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { pictures, showModal, idx, name } = this.state;

    return (
      <MainWrap>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        {/* {showModal && (
          <Modal
            img={pictures.hits}
            onCloseOpenModal={this.toggleModal}
            currentId={idx}
          />
        )} */}

        {/* {this.state.pictures && ()} */}
        <ImageGallery
          searchName={name}
          // items={pictures.hits}
          // onCloseOpenModal={this.toggleModal}
        />

        {/* <Button /> */}
        {/* <Loader /> */}
        <ToastContainer autoClose={3000} />
      </MainWrap>
    );
  }
}

export default App;
