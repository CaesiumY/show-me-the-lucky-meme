import styled from '@emotion/styled';
import { ReactNode } from 'react';

const CardBlock = styled.article`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 8px;
`;

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <CardBlock>{children}</CardBlock>;
};

export default Card;
