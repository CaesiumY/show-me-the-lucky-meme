import styled from '@emotion/styled';
import { CardData } from '../constants/types';

const CardItemBlock = styled.article``;

const CardItem = ({ imageSrc }: CardData) => {
  return (
    <CardItemBlock>
      <h1>{imageSrc}</h1>

      <img src={imageSrc} alt="aa" />
    </CardItemBlock>
  );
};

export default CardItem;
