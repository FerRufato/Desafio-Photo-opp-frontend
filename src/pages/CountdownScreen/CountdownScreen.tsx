import React, { useEffect, useState } from 'react';
import { Container, NumberText } from './CountdownScreen.styled';

type Props = {
  onFinish: () => void;
};

const CountdownScreen: React.FC<Props> = ({ onFinish }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 1) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [count, onFinish]);

  return (
    <Container>
      <NumberText>{count}</NumberText>
    </Container>
  );
};

export default CountdownScreen;
