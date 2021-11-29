import styled from '@emotion/styled';

const StyledInput = styled.input`
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  outline: none;
`;

const Input = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;
