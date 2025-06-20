import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-bottom: 32px;
  text-align: center;
`;

export const StartButton = styled.button`
  width: 80%;
  max-width: 300px;
  padding: 16px;
  background-color: #606060;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #505050;
  }
`;
