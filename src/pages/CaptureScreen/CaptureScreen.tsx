import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { Container, VideoWrapper, CaptureButton } from './CaptureScreen.styled';

type Props = {
  onNext: (photo: string) => void;
};

const videoConstraints = {
  facingMode: 'user',
};

const CaptureScreen: React.FC<Props> = ({ onNext }) => {
  const webcamRef = useRef<Webcam | null>(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onNext(imageSrc);
    }
  };

  return (
    <Container>
      <VideoWrapper>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </VideoWrapper>
      <CaptureButton onClick={handleCapture}>Capturar</CaptureButton>
    </Container>
  );
};

export default CaptureScreen;
