import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  background: #fff;
  min-height: calc(100vh - 150px);

  h1 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
      opacity: 0.9;
      transition: opacity 0.5s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const TableList = styled.table`
  width: 100%;
  margin: 15px 0px;
  padding: 15px 7px;
  border-radius: 4px;
  background: #fafafa;
`;

export const Thead = styled.thead`
  th {
    font-weight: bold;
    padding: 8px;
    background: #eee;
  }
`;

export const Tbody = styled.tbody`
  td {
    padding: 8px;
    border-radius: 3px;
    background: #fff;

    img {
      width: 35px;
      height: 35px;
      background: #eee;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
`;
