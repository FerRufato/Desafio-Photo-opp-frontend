import React, { useRef, useEffect, useState } from 'react';

type CameraCaptureProps = {
  onCapture: (photoDataUrl: string) => void;
};

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError('Não foi possível acessar a câmera.');
      }
    };

    startCamera();

    return () => {
      // Parar a câmera ao sair do componente
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const photoDataUrl = canvas.toDataURL('image/jpeg');
      onCapture(photoDataUrl);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '100%', maxHeight: '400px', background: '#000' }}
      />

      <button onClick={handleCapture}>Capturar Foto</button>
    </div>
  );
};

export default CameraCapture;
