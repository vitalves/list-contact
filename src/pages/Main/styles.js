import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  background: #fff;

  height: calc(100vh - 150px); /* REMOVER */

  h1 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const List = styled.section`
  ul {
    width: 100%;
    height: 10px;
  }
`;
