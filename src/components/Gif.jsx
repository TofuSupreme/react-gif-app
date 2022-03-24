import React from 'react';

const Gif = ({ gifID, setSelectedGif }) => {
  // const { gifID } = props;

  const handleClick = () => {
    setSelectedGif(gifID);
  };
  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick}/>
  );
};

export default Gif;
