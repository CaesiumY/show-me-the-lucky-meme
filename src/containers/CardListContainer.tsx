import { useState } from 'react';
import CardList from '../components/CardList';
import { imageData } from '../constants/data/data';

const CardListContainer = () => {
  const [lines, setLines] = useState({});

  const onChangeField = ({ name, value }: { name: string; value: string }) => {
    console.log(name, value);
    setLines((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CardList
      imageData={imageData}
      lines={lines}
      onChangeField={onChangeField}
    />
  );
};

export default CardListContainer;
