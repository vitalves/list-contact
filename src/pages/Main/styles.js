import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  background: #fff;
  min-height: calc(100vh - 150px);
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
      margin-right: 10px;
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

export const TableList = styled.table`
  width: 100%;
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
  tr {
    background: #fff;
    border: 15px;
    &:hover {
      background: linear-gradient(45deg, #fff, #f3f3f3);
    }
  }
  td {
    padding: 8px;
    border-radius: 3px;
    text-align: center;

    & + td {
      text-align: left;
    }

    img {
      width: 37px;
      height: 37px;
      background: #eee;
      border: 2px solid #fff;
      border-radius: 50%;
      opacity: 0.9;

      &:hover {
        opacity: 1;
        border: 1px solid #fff;
      }
    }

    svg {
      margin-left: 10px;
    }

    button {
      background: transparent;
      color: #1985aa;

      &:hover {
        color: #d11717;
      }
    }
  }
`;

export const Delete = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 3px;
    padding: 3px 0;
    background: red !important;
    color: #fff !important;
    border-radius: 4px;

    & + button {
      background: transparent !important;
      color: #444 !important;
    }
  }
`;
