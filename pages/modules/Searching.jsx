import React, { useState } from "react";
import SongItem from "../../src/common/containers/components/SongItem";

const Searching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <input id="music_input" type="text" />
    </div>
  );
};

export default Searching;
