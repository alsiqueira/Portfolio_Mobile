import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText  } from './styles';

interface IButtonProperties extends RectButtonProperties {
  children: string;
}

const Button: React.FC<IButtonProperties> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>
       {children}
      </ButtonText>
    </Container>
  );
}

export default Button;