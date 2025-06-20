import React from 'react';
import { Container, Title, StartButton } from './InitialScreen.styled';

type Props = {
  onNext: () => void;
};

const InitialScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <Container>
      <Title>Photo Opp</Title>
      <StartButton onClick={onNext}>Iniciar</StartButton>
    </Container>
  );
};

export default InitialScreen;
