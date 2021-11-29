import styled from '@emotion/styled';
import React from 'react';

type ResponsiveProps = {
  children: React.ReactNode;
};

const ResponsiveBlock = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Responsive = ({ children, ...rest }: ResponsiveProps) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
