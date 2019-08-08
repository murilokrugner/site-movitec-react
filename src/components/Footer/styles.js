import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #E8882D;

  footer {
    margin: 0 50px;
  }

  span:first-child {
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
  }

  p {
    align: center;
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
`;
