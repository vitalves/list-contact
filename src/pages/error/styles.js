import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  background: #fff;
  min-height: calc(100vh - 150px);
  text-align: center;

  img {
    width: 400px;
    margin: 10px auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-self: center;

  h1 {
    font-size: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 5px;
      opacity: 0.9;
      transition: opacity 0.5s;

      &:hover {
        opacity: 1;
      }
    }
  }

  a {
    background: linear-gradient(0deg, #1a8e49, #1a8e6e);
    color: #fff;
    padding: 8px 12px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: stretch;

    svg {
      margin-right: 5px;
    }

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
  }
`;
