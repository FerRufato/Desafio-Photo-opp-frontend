import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 956px;
  height: 131px;
  padding: 32px 40px;
  background-color: #606060;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-align: center;
  gap: 24px;

  @media (max-width: 600px) {
    height: 60px;
    font-size: 16px;
    padding: 16px 20px;
  }
`;
