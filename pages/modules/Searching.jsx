import React, { useState } from "react";
import SongItem from "../../src/common/containers/components/SongItem";

const API = "http://26.89.117.213:4000/api/search/name";

const Searching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    const input = document.getElementById("search_input").value;
    if (input == "") return alert("Not valid input");

    const response = await fetch(API, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ data: input })
    });

    const { data } = await response.json();

    if (data.lenght === 0) {
      console.log("Error fetching")
    }

    setSongs(data)
  };

  return (
    <div id="searcher">
      <input type="text" id="search_input" />
      <button id="boton" onClick={fetchData}>
        Buscar
      </button>
      <div> {songs && songs.map(item => <SongItem key={item.videoId} data={item}/>) } </div>
    </div>
  );
};

export default Searching;
