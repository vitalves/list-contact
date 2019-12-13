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
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 32px;
  }

  span {
    font-weight: bold;
  }
`;

export const Pic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    background: #eee;
    border: 5px solid #eee;
    width: 105px;
    height: 105px;
    border-radius: 50%;

    &:hover {
      border: 0;
    }
  }

  h1 {
    font-size: 32px;
    color: #888;
    margin: 15px;
  }
`;
