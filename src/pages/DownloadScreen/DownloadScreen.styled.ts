import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid #ccc;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;
