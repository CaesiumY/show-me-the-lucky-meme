import styled from '@emotion/styled';
import { toPng } from 'html-to-image';
import { RefObject, useCallback, useRef, useState } from 'react';
import AskBackForm from '../components/askBack/AskBackForm';
import AskBackFrame from '../components/askBack/AskBackFrame';
import Card from '../components/common/Card';
import ChangeImageButton from '../components/common/ChangeImageButton';

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

const HorizontalSlicer = styled.hr`
  background-color: black;
  width: 100%;
  height: 1px;
  border: none;
`;

const CustomizeAskBackContainer = () => {
  const [input, setInput] = useState({});
  const [background, setBackground] = useState('');
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

  const onClickChangeImage = () => {
    console.log('change');
    setBackground(
      'https://images.unsplash.com/photo-1638914962385-66e892b6c304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80',
    );
  };

  return (
    <CustomizeAskBackContainerBlock>
      <Card top>
        <AskBackFrame
          data={말대꾸_custom}
          refForCapture={ref}
          lines={input}
          isChecked={isChecked}
          backgroundSrc={background}
          custom
        />
      </Card>
      <Card bottom>
        <ChangeImageButton onClick={onClickChangeImage} />
        <HorizontalSlicer />
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
