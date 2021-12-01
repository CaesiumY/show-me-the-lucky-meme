import styled from '@emotion/styled';
import { RefObject } from 'react';
import { 말대꾸type } from '../../constants/types';

const AskBackFrameBlock = styled.article`
  background-color: white;
  font-weight: bold;
`;

const Title = styled.h2`
  margin: 0;
`;

type AskBackFrameProps = {
  data: 말대꾸type;
  refForCapture: RefObject<HTMLDivElement>;
};

const AskBackFrame = ({ refForCapture, data }: AskBackFrameProps) => {
  const { title, imageSrc } = data;

  return (
    <AskBackFrameBlock>
      <Title>{title}</Title>
      <div ref={refForCapture}>
        <img width="100%" src={`${imageSrc}`} alt={`title`} />
        <p>프리텐다드</p>
      </div>
    </AskBackFrameBlock>
  );
};

export default AskBackFrame;
