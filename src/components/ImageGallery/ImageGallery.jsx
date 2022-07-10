import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';

const ImageGallery = ({ pageList, pictureForModal }) => {
  return (
    <ImageGalleryBox>
      {pageList.map(({ webformatURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          item={webformatURL}
          id={id}
          describe={tags}
          pictureForModal={pictureForModal}
        />
      ))}
    </ImageGalleryBox>
  );
};

export default ImageGallery;
