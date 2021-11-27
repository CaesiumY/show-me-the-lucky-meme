import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Header from '../../components/Header';
import Responsive from '../../components/Responsive';

type layoutProp = {
  children: ReactNode;
};

const LayoutBlock = styled(Responsive)`
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
