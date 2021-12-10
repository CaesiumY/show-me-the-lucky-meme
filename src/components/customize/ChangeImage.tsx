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
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('files', e.target.files);
    const { files } = e.target;

    if (!files) return;
    const imageFile = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load', () => {
      const { result } = reader;
      console.log('result', result);
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
