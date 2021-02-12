import React from 'react';
import { format, parseISO, addDays } from 'date-fns';

import { Container, DebtItem } from './styles';

function DebtList({ debts, editClick }) {

  function formatDate(date){
    const newDate = format(addDays(parseISO(date), 1), "dd'/'MM'/'yyyy");
    return newDate;
  }

  return (
    <Container>
      <ul>
        {debts.map((debt) => (
          <DebtItem key={debt.id} onClick={() => editClick(debt)}>
            <strong>{debt.description}</strong>
            <div>
              <span>{debt.amount}</span>
              <span>{formatDate(debt.date)}</span>
            </div>
          </DebtItem>
        ))}
      </ul>
    </Container>
  );
}

export default DebtList;
