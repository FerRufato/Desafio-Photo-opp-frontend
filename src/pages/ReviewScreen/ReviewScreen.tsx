import React from 'react';
import {
  Container,
  ImagePreview,
  ButtonsWrapper,
  ActionButton,
} from './ReviewScreen.styled';

type Props = {
  photo: string | null;
  onRetry: () => void;
  onApprove: () => void;
};

const ReviewScreen: React.FC<Props> = ({ photo, onRetry, onApprove }) => {
  const handleApproveAndSend = () => {
    if (!photo) return;

    fetch('http://localhost:8080/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl: photo,
        createdAt: new Date().toISOString(),
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Foto salva com sucesso no backend!');
          onApprove();  // Continua o fluxo para a próxima tela
        } else {
          console.error('Erro ao salvar a foto no backend.');
        }
      })
      .catch(error => console.error(' Falha na requisição:', error));
  };

  return (
    <Container>
      <ImagePreview>
        {photo && (
          <img
            src={photo}
            alt="Prévia da Foto"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </ImagePreview>
      <ButtonsWrapper>
        <ActionButton onClick={onRetry}>Refazer</ActionButton>
        <ActionButton onClick={handleApproveAndSend}>Continuar</ActionButton>
      </ButtonsWrapper>
    </Container>
  );
};

export default ReviewScreen;
