import styled from '@emotion/styled';
import { 말대꾸type } from '../../constants/types';
import Input from '../common/Input';

const AskBackFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type AskBackFormProps = {
  data: 말대꾸type;
  value: {
    [key: string]: string;
  };
  onChangeInput: ({ key, value }: { key: string; value: string }) => void;
};

const AskBackForm = ({ data, value, onChangeInput }: AskBackFormProps) => {
  return (
    <AskBackFormBlock>
      <Input />
      <Input />
    </AskBackFormBlock>
  );
};

export default AskBackForm;
