import React from 'react';
import { Button } from '../Button/Button.styled';

type Props = {
  text: string;
  onClick: () => void;
};

const CustomButton: React.FC<Props> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default CustomButton;
