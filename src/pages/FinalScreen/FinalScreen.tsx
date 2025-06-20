import React, { useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Container, Text } from './FinalScreen.styled';

type Props = {
  onFinish: () => void;
};

const FinalScreen: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const downloadLink = 'https://example.com/foto-final.jpg';

  return (
    <Container>
      <QRCodeCanvas value={downloadLink} size={200} />
      <Text>Aponte sua câmera para baixar a imagem</Text>
    </Container>
  );
};

export default FinalScreen;
