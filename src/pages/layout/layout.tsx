import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Header from '../../components/common/Header';
import Responsive from '../../components/common/Responsive';

type layoutProp = {
  children: ReactNode;
};

const LayoutBlock = styled(Responsive)`
  padding: 1.5rem;
`;

const Layout = ({ children, ...rest }: layoutProp) => {
  return (
    <>
      <Header />
      <LayoutBlock {...rest}>{children}</LayoutBlock>
    </>
  );
};

export default Layout;
