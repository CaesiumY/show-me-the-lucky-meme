import styled from '@emotion/styled';
import { CardData } from '../constants/types';
import Input from './Input';

const CardItemBlock = styled.article`
  padding: 1rem;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & + & {
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

type LinesType = {
  [key: string]: string;
};

type CardItemProps = {
  imageData: CardData;
  lines: LinesType;
  onChangeField: ({ name, value }: { name: string; value: string }) => void;
};

const CardItem = ({ imageData, lines, onChangeField }: CardItemProps) => {
  const { linesDefault, title } = imageData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeField({ name, value });
  };

  return (
    <CardItemBlock>
      <Title>{title}</Title>
      <canvas></canvas>
      {linesDefault.map((line) => (
        <Input
          key={line}
          type="text"
          name={line}
          placeholder={line}
          onChange={onChange}
          value={lines[line] || ''}
        />
      ))}
      <button>저장</button>
    </CardItemBlock>
  );
};

export default CardItem;
