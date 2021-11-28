import styled from '@emotion/styled';
import { CardData } from '../constants/types';
import CardItem from './CardItem';

const CardListBlock = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

type LinesType = {
  [key: string]: string;
};

type CardListProps = {
  imageData: CardData[];
  lines: LinesType;
  onChangeField: ({ name, value }: { name: string; value: string }) => void;
  onSave: () => void;
};

const Card = ({ imageData, lines, onChangeField, onSave }: CardListProps) => {
  return (
    <CardListBlock>
      {imageData.map((data) => (
        <CardItem
          key={data.title}
          imageData={data}
          onChangeField={onChangeField}
          lines={lines}
          onSave={onSave}
        />
      ))}
    </CardListBlock>
  );
};

export default Card;
