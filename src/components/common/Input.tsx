import styled from '@emotion/styled';

const StyledInput = styled.input`
  font-size: 1.5rem;
  border: 2px solid #373a47;
  border-radius: 4px;
  padding: 0.5rem;
  outline: none;
`;

const Input = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;
