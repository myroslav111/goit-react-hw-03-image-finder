import React from 'react';
import { ButtonSubmit } from './Button.styled';

const Button = ({ onChengePage }) => {
  return (
    <ButtonSubmit type="submit" onClick={onChengePage}>
      Load more
    </ButtonSubmit>
  );
};

export default Button;
