import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { imageFileBuffer } from '../../constants/types';
import ChangeImageButton from './ChangeImageButton';

const HiddenInput = styled.input`
  display: none;
`;

type ChangeImageProps = {
  onClickChangeImage: (url: imageFileBuffer) => void;
};

const ChangeImage = ({ onClickChangeImage }: ChangeImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length === 0) return;
    const imageFile = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load', () => {
      const { result } = reader;
      onClickChangeImage(result);
    });
  };

  return (
    <>
      <HiddenInput
        type="file"
        id="imageInput"
        name="imageInput"
        accept="image/*"
        ref={inputRef}
        onChange={onChange}
      />
      <ChangeImageButton onClick={onClick} />
    </>
  );
};

export default ChangeImage;
