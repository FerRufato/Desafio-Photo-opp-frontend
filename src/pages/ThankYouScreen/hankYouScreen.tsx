import React, { useEffect } from 'react';
import {
  Container,
  MessageBox,
  Title,
  Text,
  Button,
} from './ThankYouScreen.styled';

type Props = {
  onFinish: () => void;
};

const ThankYouScreen: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // Volta pra tela inicial em 5 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Container>
      <MessageBox>
        <Title>Obrigado!</Title>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        <Button onClick={onFinish}>Finalizar</Button>
      </MessageBox>
    </Container>
  );
};

export default ThankYouScreen;
