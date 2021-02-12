import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  > div{
    display: flex;
  }
`;

export const Select = styled.select`
  padding: 7px;
  font-size: 15px;
  border-radius: 5px;
  flex: 1;
  transition: 0.2s;
`;

export const BtnNew = styled.button.attrs({
  type: "button"
})`
  background: #7159c1;
  color: #fff;
  padding: 5px 30px;
  border-radius: 5px;
  border: none;
  margin-left: 15px;
  font-size: 17px;
  transition: background 0.2s ease;

  &:hover {
    background: ${darken(0.03, '#7159c1')};
  }
`;

export const TextAlert = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 100px;
  text-align: center;
`;
