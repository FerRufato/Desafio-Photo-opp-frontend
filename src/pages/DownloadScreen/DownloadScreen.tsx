import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Container, QRContainer, Text, Button } from './DownloadScreen.styled';

type Props = {
  onFinish: () => void;
};

const DownloadScreen: React.FC<Props> = ({ onFinish }) => {
  const downloadLink = 'https://example.com/foto-final.jpg'; // link real da imagem gerada.

  return (
    <Container>
      <QRContainer>
        <p>Fazer download</p>
        <QRCodeCanvas value={downloadLink} size={150} />
      </QRContainer>
      <Button onClick={onFinish}>Finalizar</Button>
    </Container>
  );
};

export default DownloadScreen;
