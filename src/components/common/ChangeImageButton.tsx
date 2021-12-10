import React from 'react';
import Button from './Button';

type ChangeImageButtonProps = {
  onClick: () => void;
};

const ChangeImageButton = ({ onClick }: ChangeImageButtonProps) => {
  return (
    <Button color="primary" onClick={onClick}>
      이미지 바꾸기
    </Button>
  );
};

export default ChangeImageButton;
