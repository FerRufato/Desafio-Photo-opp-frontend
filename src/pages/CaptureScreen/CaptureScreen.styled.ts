import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 16px;
  background-color: #f8f8f8;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  height: auto;
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const CaptureButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
