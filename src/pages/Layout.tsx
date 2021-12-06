import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';

type layoutProp = {
  children: ReactNode;
};

const LayoutBlock = styled(Responsive)`
  padding: 1.5rem;
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const Layout = ({ children, ...rest }: layoutProp) => {
  return (
    <>
      <Header />
      <LayoutBlock {...rest}>{children}</LayoutBlock>
      <Footer />
    </>
  );
};

export default Layout;
