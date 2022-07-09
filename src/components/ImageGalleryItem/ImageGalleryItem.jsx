import React from 'react';
import { ImageGalleryItemWrap, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onCloseOpenModal, id, describe }) => {
  return (
    <ImageGalleryItemWrap>
      <Image id={id} src={item} alt={describe} onClick={onCloseOpenModal} />
    </ImageGalleryItemWrap>
  );
};

export default ImageGalleryItem;
