import CardList from '../components/CardList';
import { imageData } from '../constants/data/data';

const CardListContainer = () => {
  const { src, totalLines } = imageData.img_1;

  return <CardList imageSrc={src} totalLines={totalLines} />;
};

export default CardListContainer;
