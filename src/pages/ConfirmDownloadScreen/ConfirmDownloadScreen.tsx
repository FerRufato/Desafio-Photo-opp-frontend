import React from 'react';
import {
  Container,
  DownloadBox,
  Title,
  Button,
} from './ConfirmDownloadScreen.styled';

type Props = {
  onNext: () => void;
};

const ConfirmDownloadScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <Container>
      <DownloadBox>
        <Title>Fazer download</Title>
        <Button onClick={onNext}>Finalizar</Button>
      </DownloadBox>
    </Container>
  );
};

export default ConfirmDownloadScreen;
