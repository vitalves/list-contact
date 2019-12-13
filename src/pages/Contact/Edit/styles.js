import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  background: #fff;
  min-height: calc(100vh - 230px);
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

export const Section = styled.section`
  width: 100%;
  padding: 15px 5px 30px;
  border-radius: 4px;
  background: #fafafa;

  form {
    background: #fff;
    padding: 15px 5px 30px;
    border-radius: 4px;

    span {
      color: #fb6f91;
      font-size: 12px;
      margin-left: 20px;
    }
  }

  input,
  button,
  select {
    width: calc(100% - 40px);
    background: rgba(26, 143, 110, 0.1);
    color: rgb(26, 143, 110);
    padding: 15px 15px;
    margin: 30px 20px 0;
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  input[type='date'] {
    flex-direction: row;
  }

  button {
    background: linear-gradient(0deg, #1a8e49, #1a8e6e);
    color: #fff;
    font-weight: bolder;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
