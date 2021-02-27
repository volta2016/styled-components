import styled, { css } from "styled-components";

import { colors } from './globals.js';



export const Buttons = styled.a`
  background: ${colors.white};
  border-radius: 5px;
  color: ${colors.black};
  color: ${colors.black};
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  padding: 0 64px;
  font-weight: 600;
  margin: 24px 24px;
  font-size: 14px;
  text-decoration: none;
  &:hover  {
    background: ${colors.gresoft};
  }

  ${props => 
  props.outline && 
  css`
    background: transparent;
    border: 1px solid ${colors.black};
    &:hover  {
      background: ${colors.blacktrans};
    }
  `}

  ${props => 
  props.primary && 
  css`
    background: ${colors.primary};
    &:hover  {
      background: ${colors.yellowsoft};
    }
  `}

  ${props => 
  props.secondary && 
  css`
    background: ${colors.secondary};
    &:hover  {
      background: ${colors.lemonsoft};
    }
  `}
`;

export const SearchBar = styled.div`
  height: 48px;
  position: relative;
  margin: 80px 24px;
  input {
    height: 48px;
    width: 100%;
    padding: 0 64px;
    border-radius: 100px;
    border: none;
    font-size: 14px;
    outline: none;
    color: ${colors.black}
    &::placeholder {
      color: ${colors.black};
    }
    @media (max-width: 576px) {
      padding: 0  16px 0 40px;
    }
  }

  img {
    position: absolute;
    top: 35%;
    left: 24px;
    transform: translate(-50%);
    z-index: 1;
    width: 16px;
    height: 16px;
  }
`