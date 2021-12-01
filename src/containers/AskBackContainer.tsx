import { RefObject, useState } from 'react';
import styled from '@emotion/styled';
import { toPng } from 'html-to-image';

import AskBackForm from '../components/askBack/AskBackForm';
import Card from '../components/common/Card';
import { 말대꾸 } from '../constants/data/data';

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

  const onChangeInput = ({ key, value }: { key: string; value: string }) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const onCaptureElement = async (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current) return;

    try {
      const capturedUrl = await toPng(ref.current, { cacheBust: true });
      const link = document.createElement('a');
      link.download = 'sample.png';
      link.href = capturedUrl;
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AskBackContainerBlock>
      <Card top>
        <div>world</div>
      </Card>
      <Card bottom>
        <AskBackForm
          data={말대꾸}
          value={input}
          onChangeInput={onChangeInput}
        />
      </Card>
    </AskBackContainerBlock>
  );
};

export default AskBackContainer;
