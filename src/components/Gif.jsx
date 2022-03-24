import React from 'react';

const Gif = (props) => {
  const { gifId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  return (
    <img src={url} alt="gif" className="gif"/>
  );
};

export default Gif;
