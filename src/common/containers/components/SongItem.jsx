import { useState } from "react";
import Image from "next/image";

import styles from "../../../../public/styles/containers/components/SongItem.module.scss";

const SongItem = ({ data }) => {
  console.log(data);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.item} id={data.videoId}>
      <div className={styles.content}>
        <div>
          <Image src={data.image} width={80} height={60} alt=".thumb"/>
        </div>
        <div>
          <h3 className={styles.title}>{data.title}</h3>
          <span className={styles.text}>{data.author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
