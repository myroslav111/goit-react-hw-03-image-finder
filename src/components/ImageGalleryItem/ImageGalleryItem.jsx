import React from 'react';
import { ImageGalleryItemWrap, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, id, describe, pictureForModal }) => {
  return (
    <ImageGalleryItemWrap>
      <Image id={id} src={item} alt={describe} onClick={pictureForModal} />
    </ImageGalleryItemWrap>
  );
};

export default ImageGalleryItem;
