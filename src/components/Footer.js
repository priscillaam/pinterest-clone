//Mobile footer 
import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>This is a footer</p>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.footer`
  display: none;
  @media(max-width: 768px) {
    background-color: #f8f8f8;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: inline;
  }
`;