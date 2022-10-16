import { useState } from "react";
import Image from "next/image";

const SongItem = ({ data }) => {
    console.log(data)
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div id={data.videoId}>
            <div>
                <Image src={data.image} width={120} height={120}/>
            </div>
            <div>
                <h3>{data.title}</h3>
                <span>{data.author.name}</span>
                <p>{data.timestamp}</p>
            </div>
            <div>
                <button>play</button>
                <button>Add to playlist</button>
            </div>
        </div>
    )
}

export default SongItem