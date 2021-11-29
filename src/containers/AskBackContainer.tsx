import styled from '@emotion/styled';
import { useState } from 'react';
import AskBackForm from '../components/askBack/AskBackForm';
import Card from '../components/common/Card';
import { 말대꾸 } from '../constants/data/data';

const AskBackContainerBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AskBackContainer = () => {
  const [input, setInput] = useState({
    first: '',
    second: '',
  });

  const onChangeInput = ({ key, value }: { key: string; value: string }) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <AskBackContainerBlock>
      <Card>
        <div>world</div>
      </Card>
      <Card>
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
