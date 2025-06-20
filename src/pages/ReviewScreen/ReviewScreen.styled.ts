import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza verticalmente */
  height: 100vh; /* Faz o container ocupar a tela toda */
  padding: 16px;
`;

export const ImagePreview = styled.div`
  background-color: #ddd;
  width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;
