import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import Header from '../../components/Header';

type layoutProp = {
  children: ReactNode;
};

const LayoutBlock = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const layout = ({ children, ...rest }: layoutProp) => {
  return (
    <>
      <Header />
      <LayoutBlock {...rest}>{children}</LayoutBlock>
    </>
  );
};

export default layout;
