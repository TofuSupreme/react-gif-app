import React, { useState } from 'react';

import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("13HgwGsXF0aiGY");
  const [gifList, setGifList] = useState(["13UZisxBxkjPwI", "5ntdy5Ban1dIY", "kHrKpJiCbOmkWD4xT9"]);
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
