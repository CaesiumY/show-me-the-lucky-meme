import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const CardBlock = styled.article<CardBlockProps>`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 80%;

    ${({ top }) =>
      top &&
      css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
    ${({ bottom }) =>
      bottom &&
      css`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      `}
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

type CardProps = {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
};

type CardBlockProps = {
  top?: boolean;
  bottom?: boolean;
};

const Card = ({ children, top, bottom }: CardProps) => {
  return (
    <CardBlock top={top} bottom={bottom}>
      {children}
    </CardBlock>
  );
};

export default Card;
