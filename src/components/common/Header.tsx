import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.h4`
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <h2>
            <Link to="/">쇼미더럭키밈</Link>
          </h2>
          <NavItem>
            <Link to="/custom">🎨나만의 이미지 넣기</Link>
          </NavItem>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
