import styled from '@emotion/styled';

export const SearchbarWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 18px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: rgba(63, 81, 181, 0.7);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.button`
  /*  */
`;

export const InputWrap = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 3px;
`;

export const SearchFormInput = styled.input`
  height: 15px;
  width: 15px;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #fff;
  outline: none;
  padding: 5px;
  position: relative;
  transition: all 250ms cubic-bezier(0.1, 0.5, 0.252, 1.1);
  /* transition-delay: 2s; */

  /*  */
  &:focus {
    height: 25px;
    width: 250px;
    border-radius: 3px;
    color: #26547c;
    cursor: initial;
  }

  &::placeholder {
    color: #fff;
  }
  &:focus::placeholder {
    color: #a1a1a1;
  }

  & ~ div {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 4px;
    width: 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
    position: absolute;
    display: block;
    opacity: 1;
    right: -17px;
    top: 24px;
    transform: rotate(45deg);
    transition: all 250ms cubic-bezier(0.2, 0.6, 0.252, 1.2);
    /* transition-delay: 3s; */
  }
  /* */
  &:focus ~ div {
    /* box-shadow: none; */
    top: 6px;
    /* left: 215px; */
    /* padding: 8px 16px; */
    /* border-radius: 2px; */
    /* background-color: #3f51b5; */
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    /* transition-delay: 3s; */
    text-align: center;
    display: inline-block;
    /* color: #fff; */
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    display: none;
    /* width: 38px; */
    /* height: 25px; */
    /* box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); */
  }

  /* & ~ div span {
    opacity: 0;
    font-size: 10px;
    transform: rotate(180deg);
  } */

  /* &:focus ~ div span {
    opacity: 1;
  } */

  & ~ button {
    background: none;
    border: none;
    padding: 0;
    /* cursor: none; */
    outline: inherit;
    position: absolute;
    top: 5px;
    left: 215px;
    border-radius: 2px;
    /* background-color: #3f51b5; */
    background-color: transparent;
    text-align: center;
    display: inline-block;
    /* color: #fff; */
    color: transparent;
    border: 0;
    text-decoration: none;
    font-family: inherit;
    font-size: 10px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    width: 38px;
    height: 25px;
    /* 
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); */
  }

  &:focus ~ button {
    /* left: 215px; */
    background-color: #fff;
    color: #3f51b5;
    width: 38px;
    height: 25px;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    &:hover {
      transform: scale(1.1);
      /* background-color: rgba(63, 81, 181, 0.7);
      color: #fff; */
    }
    /* transition: all 250ms cubic-bezier(0.2, 0.6, 0.252, 1.2);
    transition-delay: 1s; */
  }
`;
