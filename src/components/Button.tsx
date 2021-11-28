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
`;

const Button = ({ ...rest }) => {
  return <StyledButton {...rest}></StyledButton>;
};

export default Button;
