import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const DebtItem = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    color: #7159c1;
    font-size: 20px;
    font-weight: normal;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
