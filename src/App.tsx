import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import InitialScreen from './pages/InitialScreen/InitialScreen';
import LoadingScreen from './pages/LoadingScreen/LoadingScreen';
import CaptureScreen from './pages/CaptureScreen/CaptureScreen';
import CountdownScreen from './pages/CountdownScreen/CountdownScreen';
import ReviewScreen from './pages/ReviewScreen/ReviewScreen';
import DownloadScreen from './pages/DownloadScreen/DownloadScreen';
import ThankYouScreen from './pages/ThankYouScreen/hankYouScreen';
import FinalScreen from './pages/FinalScreen/FinalScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<
    | 'initial'
    | 'loading'
    | 'capture'
    | 'countdown'
    | 'review'
    | 'download'
    | 'thankyou'
    | 'final'
  >('initial');

  const [photo, setPhoto] = useState<string | null>(null);

  const handleStart = () => setScreen('loading');

  const handleNextFromLoading = () => setScreen('capture');

  const handleNextFromCapture = (capturedPhoto: string) => {
    setPhoto(capturedPhoto);
    setScreen('countdown');
  };

  const handleFinishCountdown = () => setScreen('review');

  const handleRetry = () => {
    setPhoto(null);
    setScreen('capture');
  };

  const handleApprove = () => setScreen('download');

  const handleFinishDownload = () => setScreen('thankyou');

  const handleFinishThankYou = () => setScreen('final');

  const handleFinishFinal = () => {
    setPhoto(null);
    setScreen('initial');
  };

  return (
    <>
      <GlobalStyle />

      {screen === 'initial' && <InitialScreen onNext={handleStart} />}

      {screen === 'loading' && <LoadingScreen onNext={handleNextFromLoading} />}

      {screen === 'capture' && <CaptureScreen onNext={handleNextFromCapture} />}

      {screen === 'countdown' && (
        <CountdownScreen onFinish={handleFinishCountdown} />
      )}

      {screen === 'review' && (
        <ReviewScreen
          photo={photo}
          onRetry={handleRetry}
          onApprove={handleApprove}
        />
      )}

      {screen === 'download' && (
        <DownloadScreen onFinish={handleFinishDownload} />
      )}

      {screen === 'thankyou' && (
        <ThankYouScreen onFinish={handleFinishThankYou} />
      )}

      {screen === 'final' && <FinalScreen onFinish={handleFinishFinal} />}
    </>
  );
};

export default App;
