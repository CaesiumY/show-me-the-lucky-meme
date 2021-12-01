import { RefObject, useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { toPng } from 'html-to-image';

import AskBackForm from '../components/askBack/AskBackForm';
import Card from '../components/common/Card';
import { 말대꾸 } from '../constants/data/data';
import AskBackFrame from '../components/askBack/AskBackFrame';

const AskBackContainerBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AskBackContainer = () => {
  const [input, setInput] = useState({});
  const ref = useRef(null);

  const onChangeInput = ({ key, value }: { key: string; value: string }) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const onCaptureElement = useCallback(
    async (ref: RefObject<HTMLDivElement>) => {
      if (!ref.current) return;

      // TODO - 로딩 스피너 추가
      try {
        const capturedUrl = await toPng(ref.current, {
          cacheBust: true,
          backgroundColor: 'white',
        });
        const link = document.createElement('a');
        link.download = `${말대꾸.title}.png`;
        link.href = capturedUrl;
        link.click();
      } catch (error) {
        console.error(error);
        alert('저장에 실패했습니다!');
      }
    },
    [],
  );

  return (
    <AskBackContainerBlock>
      <Card top>
        <AskBackFrame refForCapture={ref} />
      </Card>
      <Card bottom>
        <AskBackForm
          data={말대꾸}
          value={input}
          onChangeInput={onChangeInput}
          onCaptureElement={onCaptureElement}
          refForCapture={ref}
        />
      </Card>
    </AskBackContainerBlock>
  );
};

export default AskBackContainer;
