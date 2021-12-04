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

const CenterBlock = styled.div`
  text-align: center;
`;

const FrameDiv = styled.div`
  display: inline-block;
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 425px;
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
      <CenterBlock>
        <FrameDiv ref={refForCapture}>
          <Image src={`${imageSrc}`} alt={`title`} />

          {Object.keys(lines).map((key, index) => (
            <Line key={key} pos={index}>
              {lines[key]}
            </Line>
          ))}
        </FrameDiv>
      </CenterBlock>
    </AskBackFrameBlock>
  );
};

export default AskBackFrame;
