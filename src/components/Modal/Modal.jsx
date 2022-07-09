import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalPage, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // после рендера вызивается componentDidMount
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  // вызывается при розмонтировании компонента чистит снимает слушателя
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  // фун. закрыти модалки по esc
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseOpenModal();
    }
  };
  // фун. закрыти модалки по backdrop
  handleBakcdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseOpenModal();
    }
  };
  // выбираем нужную пейджу для модалки
  getImgByIndex = () => {
    const pageForModal = this.props.img.find(
      page => Number(this.props.currentId) === Number(page.id)
    );
    return pageForModal.largeImageURL;
  };

  render() {
    const ref = this.getImgByIndex();
    return createPortal(
      <Overlay onClick={this.handleBakcdropClick}>
        <ModalPage>
          <Img src={ref} alt="" />
        </ModalPage>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
