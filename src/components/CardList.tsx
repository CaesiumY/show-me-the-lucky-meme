import styled from '@emotion/styled';
import { CardData } from '../constants/types';
import CardItem from './CardItem';

const CardListBlock = styled.div`
  margin: 0 auto;
  background-color: white;
  max-width: 768px;
`;

const Card = ({ imageSrc, totalLines }: CardData) => {
  return (
    <CardListBlock>
      <CardItem imageSrc={imageSrc} totalLines={totalLines} />
    </CardListBlock>
  );
};

export default Card;
