import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 150px;
  width: 100%;
  background-color: #E8882D;

  img {
    margin-left: 150px;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  margin-right: 200px;

  li {
    display: flex;
    align-items: center;

    font-size: 16px;
    font-weight: bold;

    margin-left: 35px;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
