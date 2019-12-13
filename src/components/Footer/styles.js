import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(45deg, #fff, #eee);
  max-width: 1000px;
  border-bottom: 1px solid #eee;
  border-start-end-radius: 35px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 26px;
    color: #777;
  }

  a {
    margin: 5px;
  }
`;
