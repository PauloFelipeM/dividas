import React from 'react';

import { Container } from './styles';

function BtnModal({children, ...rest}) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

export default BtnModal;
