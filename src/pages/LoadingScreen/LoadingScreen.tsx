import React, { useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { Container, Text } from './LoadingScreen.styled';

type Props = {
  onNext: () => void;
};

const LoadingScreen: React.FC<Props> = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <Container>
      <Spinner />
      <Text>Detectar seu rosto</Text>
    </Container>
  );
};

export default LoadingScreen;
