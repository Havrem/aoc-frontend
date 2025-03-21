import { Image } from "react-bootstrap";
import notes from './assets/goldnotes.png';
import chimes from './assets/windchimes.mp3'
import { useState, useRef, useEffect } from "react";

function Chimes() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(new Audio(chimes));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (play) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [play]);

  return (
    <Image src={notes} onClick={() => setPlay(!play)} className="notes"></Image>
  );
}

export default Chimes;