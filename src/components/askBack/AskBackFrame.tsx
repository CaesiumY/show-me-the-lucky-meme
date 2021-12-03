import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { RefObject } from 'react';
import { 말대꾸type } from '../../constants/types';

const AskBackFrameBlock = styled.article`
  background-color: white;
  font-weight: bold;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`;

const FrameDiv = styled.div`
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Line = styled.p<LineProps>`
  font-size: 4rem;
  user-select: none;
  width: 100%;
  position: absolute;
  margin: 0;
  ${({ pos }) => css`
    top: ${pos * 520 + 90}px;
  `}
`;

type LineProps = {
  pos: number;
};

type AskBackFrameProps = {
  data: 말대꾸type;
  refForCapture: RefObject<HTMLDivElement>;
  lines: {
    [key: string]: string;
  };
};

const AskBackFrame = ({ refForCapture, data, lines }: AskBackFrameProps) => {
  const { title, imageSrc } = data;

  return (
    <AskBackFrameBlock>
      <Title>{title} 짤</Title>
      <FrameDiv ref={refForCapture}>
        <Image width="100%" src={`${imageSrc}`} alt={`title`} />
        {Object.keys(lines).map((key, index) => (
          <Line key={key} pos={index}>
            {lines[key]}
          </Line>
        ))}
      </FrameDiv>
    </AskBackFrameBlock>
  );
};

export default AskBackFrame;
