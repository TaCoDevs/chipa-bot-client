import React, { useEffect, useState } from "react";
import SongItem from "../../src/common/containers/components/SongItem";
import styles from "./styles/index.module.scss";
import Image from "next/image";

import btnSearch from "../../public/assets/images/icons/search-icon.png";

const API = "http://26.89.117.213:4000/api/search/name";

const Searching = () => {
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    const input = document.getElementById("search_input").value;
    if (input == "") return alert("Not valid input");

    const response = await fetch(API, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ data: input }),
    });

    const { data } = await response.json();

    if (data.lenght === 0) {
      console.log("Error fetching");
    }

    setSongs(data);
  };

  useEffect(() => {
    const input = document.getElementById("search_input")
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") fetchData()
    })
  })

  return (
    <div id="searcher">
      <div className={styles.searcher_container}>
        <div className={styles.searcher}>
          <div className={styles.search_button} onClick={fetchData}>
            <Image src={btnSearch} alt=".search-icon"/>
          </div>
          <input
            className={styles.input}
            type="text"
            id="search_input"
            placeholder="Buscar"
          />
        </div>
      </div>
      <div>
        {songs &&
          songs.map((item) => <SongItem key={item.videoId} data={item} />)}{" "}
      </div>
    </div>
  );
};

export default Searching;
