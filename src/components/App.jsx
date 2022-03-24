import React, { useState } from 'react';

import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedGif, setSelectedGif] = useState("13HgwGsXF0aiGY");
  const [gifList, setGifList] = useState(["13UZisxBxkjPwI", "5ntdy5Ban1dIY", "kHrKpJiCbOmkWD4xT9"]);

  const searchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // res.data.map (gif=>gif.id) //array with 10
      const gifIdArray = res.data.map((gif) => gif.id);
      setGifList(gifIdArray);
    });
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGiphy={searchGiphy} />
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
