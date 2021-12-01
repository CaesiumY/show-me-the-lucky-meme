import styled from '@emotion/styled';

const StyledButton = styled.button`
  color: white;
  background-color: #5ab55e;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #6ddb71;
  }

  &:disabled {
    background-color: gray;
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading: boolean;
};

const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
  return (
    <StyledButton disabled={isLoading} {...rest}>
      {isLoading ? '로딩 중' : children}
    </StyledButton>
  );
};

export default Button;
