import styled from '@emotion/styled';
import { RefObject } from 'react';
import { 말대꾸type } from '../../constants/types';
import Button from '../common/Button';
import Input from '../common/Input';

const AskBackFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type AskBackFormProps = {
  data: 말대꾸type;
  value: {
    [key: string]: string;
  };
  isLoading: boolean;

  onChangeInput: ({ key, value }: { key: string; value: string }) => void;
  onCaptureElement: (ref: RefObject<HTMLDivElement>) => void;
  refForCapture: RefObject<HTMLDivElement>;
};

const AskBackForm = ({
  data,
  value,
  onChangeInput,
  onCaptureElement,
  refForCapture,
  isLoading,
}: AskBackFormProps) => {
  const { linesDefault } = data;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeInput({ key: name, value });
  };

  const onClickSave = () => {
    onCaptureElement(refForCapture);
  };

  return (
    <AskBackFormBlock>
      {linesDefault.map((line) => (
        <Input
          key={line}
          placeholder={line}
          name={line}
          onChange={onChange}
          value={value[line] || ''}
        />
      ))}
      <Button isLoading={isLoading} onClick={onClickSave}>
        저장하기
      </Button>
    </AskBackFormBlock>
  );
};

export default AskBackForm;
