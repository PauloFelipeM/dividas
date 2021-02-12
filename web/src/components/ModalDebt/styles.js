import styled from 'styled-components';
import { darken } from 'polished';

import BtnModal from '~/components/BtnModal';

export const Container = styled.div``;

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  > div {
    margin-top: 20px;
    text-align: right;
  }

  label {
    display: block;
    text-align: start;
  }

  input, select {
    width: 100%;
    padding: 7px;
    font-size: 15px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 5px;
    box-shadow: none;
    margin-top: 5px;
  }
`;

export const Select = styled.select`
  padding: 7px;
  font-size: 15px;
  border-radius: 5px;
  flex: 1;
  transition: 0.2s;
`;

export const BtnClose = styled(BtnModal)`
  background: #e2e2e2;
  color: #000;
  transition: background 0.2s ease;

  &:hover {
    background: ${darken(0.03, '#e2e2e2')};
  }
`;

export const BtnRemove = styled(BtnModal)`
  background: #f50c0c;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background: ${darken(0.03, '#f50c0c')};
  }
`;

export const BtnSave = styled(BtnModal)`
  background: #7159c1;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background: ${darken(0.03, '#7159c1')};
  }
`;
