import styled from '@emotion/styled';
import { RefObject } from 'react';

const AskBackFrameBlock = styled.article`
  background-color: white;
  font-weight: bold;
`;

type AskBackFrameProps = {
  refForCapture: RefObject<HTMLDivElement>;
};

const AskBackFrame = ({ refForCapture }: AskBackFrameProps) => {
  return (
    <AskBackFrameBlock>
      <div ref={refForCapture}>
        <img width="100%" src="/images/img_1.png" alt="" />
        <p>프리텐다드</p>
      </div>
    </AskBackFrameBlock>
  );
};

export default AskBackFrame;
