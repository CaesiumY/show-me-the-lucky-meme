import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { RefObject } from 'react';
import { imageFileBuffer, 말대꾸type } from '../../constants/types';

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

const BackgroundDiv = styled.div<BackgroundDivProps>`
  ${({ backgroundSrc }) =>
    backgroundSrc &&
    css`
      background-image: url(${backgroundSrc.toString()});
    `}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 27.7%;
  width: 100%;
  height: 42.5%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 425px;
  height: auto;
`;

const Line = styled.p<LineProps>`
  font-size: 3.5rem;
  user-select: none;
  width: 100%;
  position: absolute;
  margin: 0;
  ${({ pos }) => css`
    top: ${pos * 65 + 12}%;
  `}

  @media (max-width: 473px) {
    font-size: 12vw;
  }
`;

type BackgroundDivProps = {
  backgroundSrc?: imageFileBuffer;
};

type LineProps = {
  pos: number;
};

type AskBackFrameProps = {
  data: 말대꾸type;
  refForCapture: RefObject<HTMLDivElement>;
  lines: {
    [key: string]: string;
  };
  isChecked: boolean;
  backgroundSrc?: imageFileBuffer;
  custom?: boolean;
};

const AskBackFrame = ({
  refForCapture,
  data,
  lines,
  isChecked,
  custom,
  backgroundSrc,
}: AskBackFrameProps) => {
  const { title, imageSrc } = data;

  return (
    <AskBackFrameBlock>
      <Title>{title} 짤</Title>
      <CenterBlock>
        <FrameDiv ref={refForCapture}>
          {custom && (
            <BackgroundDiv backgroundSrc={backgroundSrc}></BackgroundDiv>
          )}
          <Image src={`${imageSrc}`} alt={`title`} />

          {Object.keys(lines).map((key, index) => (
            <Line key={key} pos={index}>
              {lines[key]}
              {index === 0 && isChecked && '···'}
            </Line>
          ))}
        </FrameDiv>
      </CenterBlock>
    </AskBackFrameBlock>
  );
};

export default AskBackFrame;
