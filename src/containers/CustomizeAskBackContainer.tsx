import styled from '@emotion/styled';
import { toPng } from 'html-to-image';
import { RefObject, useCallback, useRef, useState } from 'react';
import AskBackForm from '../components/askBack/AskBackForm';
import AskBackFrame from '../components/askBack/AskBackFrame';
import Card from '../components/common/Card';

import { 말대꾸_custom } from '../constants/data/data';

const CustomizeAskBackContainerBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
  min-height: 800px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

const CustomizeAskBackContainer = () => {
  const [input, setInput] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);

  const onChangeInput = ({ key, value }: { key: string; value: string }) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const onCheck = (value: boolean) => {
    setIsChecked(value);
  };

  const onCaptureElement = useCallback(
    async (ref: RefObject<HTMLDivElement>) => {
      if (!ref.current) return;

      try {
        setIsLoading(true);

        const capturedUrl = await toPng(ref.current, {
          cacheBust: true,
          backgroundColor: 'white',
        });
        const link = document.createElement('a');
        link.download = `${말대꾸_custom.title}.png`;
        link.href = capturedUrl;
        link.click();
      } catch (error) {
        console.error(error);
        alert('저장에 실패했습니다!');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return (
    <CustomizeAskBackContainerBlock>
      <Card top>
        <AskBackFrame
          data={말대꾸_custom}
          refForCapture={ref}
          lines={input}
          isChecked={isChecked}
          custom
        />
      </Card>
      <Card bottom>
        <AskBackForm
          data={말대꾸_custom}
          value={input}
          isLoading={isLoading}
          onChangeInput={onChangeInput}
          onCaptureElement={onCaptureElement}
          refForCapture={ref}
          isChecked={isChecked}
          onCheck={onCheck}
        />
      </Card>
    </CustomizeAskBackContainerBlock>
  );
};

export default CustomizeAskBackContainer;
