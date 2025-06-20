import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const CameraTest: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      console.log('Imagem capturada:', imageSrc);
      alert('Imagem capturada com sucesso!');
    } else {
      console.error('Erro ao capturar imagem da câmera');
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: '300px', height: '400px', backgroundColor: '#000' }}
      />
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleCapture}
      >
        Capturar Foto
      </button>
    </div>
  );
};

export default CameraTest;
