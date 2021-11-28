import styled from '@emotion/styled';
import { CardData } from '../constants/types';

const CardItemBlock = styled.article`
  padding: 1rem;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  & + & {
    margin-top: 2rem;
  }
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
  const { linesDefault } = imageData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeField({ name, value });
  };

  return (
    <CardItemBlock>
      {linesDefault.map((line) => (
        <input
          key={line}
          type="text"
          name={line}
          placeholder={line}
          onChange={onChange}
          value={lines[line] || ''}
        />
      ))}
    </CardItemBlock>
  );
};

export default CardItem;
