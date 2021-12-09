import { css } from '@emotion/react';
import styled from '@emotion/styled';

const styleTable = {
  success: ['#5ab55e', '#6ddb71'],
  primary: ['#0984e3', '#74b9ff'],
};

const StyledButton = styled.button<StyledButtonProps>`
  color: white;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  ${({ color }) =>
    color &&
    css`
      background-color: ${styleTable[color][0]};

      &:hover {
        background-color: ${styleTable[color][1]};
      }
    `}

  &:disabled {
    background-color: gray;
  }
`;

type StyleTableKey = 'success' | 'primary';

type StyledButtonProps = {
  color: StyleTableKey;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  color?: StyleTableKey;
};

const Button = ({ children, isLoading, color, ...rest }: ButtonProps) => {
  return (
    <StyledButton disabled={isLoading} color={color || 'success'} {...rest}>
      {isLoading ? '로딩 중' : children}
    </StyledButton>
  );
};

export default Button;
