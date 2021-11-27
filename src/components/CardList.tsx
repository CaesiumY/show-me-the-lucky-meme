import styled from '@emotion/styled';
import CardItem from './CardItem';

const CardListBlock = styled.div`
  margin: 0 auto;
  background-color: white;
  max-width: 768px;
`;

type CardData = {
  imageSrc: string;
};

const Card = ({ imageSrc }: CardData) => {
  return (
    <CardListBlock>
      <CardItem imageSrc={imageSrc} />
    </CardListBlock>
  );
};

export default Card;
