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

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  user-select: none;
  line-height: 2rem;
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
  isChecked: boolean;
  onCheck: (value: boolean) => void;
};

const AskBackForm = ({
  data,
  value,
  onChangeInput,
  onCaptureElement,
  refForCapture,
  isLoading,
  isChecked,
  onCheck,
}: AskBackFormProps) => {
  const { linesDefault } = data;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeInput({ key: name, value });
  };

  const onClickSave = () => {
    onCaptureElement(refForCapture);
  };

  const onCheckMiddleDot = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheck(e.target.checked);
  };

  return (
    <AskBackFormBlock>
      <FlexDiv>
        <Checkbox
          type="checkbox"
          name="middleDot"
          id="middleDot"
          onChange={onCheckMiddleDot}
          checked={isChecked}
        />
        <CheckboxLabel htmlFor="middleDot"> ··· 추가하기</CheckboxLabel>
      </FlexDiv>
      {linesDefault.map((line) => (
        <Input
          key={line}
          placeholder={line}
          name={line}
          onChange={onChange}
          value={`${value[line] || ''}`}
        />
      ))}
      <Button isLoading={isLoading} onClick={onClickSave}>
        저장하기
      </Button>
    </AskBackFormBlock>
  );
};

export default AskBackForm;
