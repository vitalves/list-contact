import styled from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(45deg, #fff, #eee);
  max-width: 1000px;
  height: 70px;
  border-bottom: 1px solid #eee;
  border-end-end-radius: 35px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  img {
    width: 150px;
    margin: 5px 15px;
  }
  span {
    font-size: 25px;
    color: #bbb;
    margin-left: -30px;
    z-index: 1;
  }

  &::after {
    content: ' ';
    width: 135px;
    height: 2px;
    background: #eee;
    margin-left: -220px;
    z-index: 9;
  }
`;
