import styled from '@emotion/styled';
import Responsive from './Responsive';

const FooterBlock = styled.footer`
  width: 100%;
  background-color: #303740;
  color: #eee;
`;

const FooterWrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ListBlock = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0;
`;

const FooterAnchor = styled.a`
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterWrapper>
        <ListBlock>
          <li>
            <FooterAnchor
              target="_blank"
              href="mailto: dbs2636@gmail.com"
              rel="noreferrer"
            >
              💬이메일로 오류 제보하기
            </FooterAnchor>
          </li>
          <li>
            <FooterAnchor href="https://github.com/CaesiumY/show-me-the-lucky-meme">
              👩‍💻깃허브로 소스코드 보기
            </FooterAnchor>
          </li>
        </ListBlock>
      </FooterWrapper>
    </FooterBlock>
  );
};

export default Footer;
