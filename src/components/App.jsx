import React from 'react';

import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const App = () => {
  const selectedGif = "13HgwGsXF0aiGY";
  const gifList = ["13UZisxBxkjPwI", "5ntdy5Ban1dIY", "5ntdy5Ban1dIY"]
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />

        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} />
      </div>
    </div>
  );
};

export default App;
