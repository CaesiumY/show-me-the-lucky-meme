import CardList from '../components/CardList';
import { imageData } from '../constants/data/data';

const CardListContainer = () => {
  const { src } = imageData.img_1;

  return <CardList imageSrc={src} />;
};

export default CardListContainer;
