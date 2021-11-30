import styled from '@emotion/styled';
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
  onChangeInput: ({ key, value }: { key: string; value: string }) => void;
};

const AskBackForm = ({ data, value, onChangeInput }: AskBackFormProps) => {
  const { linesDefault } = data;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeInput({ key: name, value });
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
      <Button>저장하기</Button>
    </AskBackFormBlock>
  );
};

export default AskBackForm;
