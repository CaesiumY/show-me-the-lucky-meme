import styled from '@emotion/styled';
import { CardData } from '../constants/types';
import Button from './Button';
import CanvasDrawing from './CanvasDrawing';
import Input from './Input';

const CardItemBlock = styled.article`
  padding: 1rem;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
  onSave: () => void;
};

const CardItem = ({
  imageData,
  lines,
  onChangeField,
  onSave,
}: CardItemProps) => {
  const { linesDefault, title, imageSrc } = imageData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeField({ name, value });
  };

  return (
    <CardItemBlock>
      <Title>{title}</Title>
      <CanvasDrawing
        imageSrc={imageSrc}
        lines={lines}
        linesDefault={linesDefault}
      />
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
      <Button onClick={onSave}>저장</Button>
    </CardItemBlock>
  );
};

export default CardItem;
