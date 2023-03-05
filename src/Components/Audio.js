import React, { useEffect, useRef } from "react";
import bgm from "../Images/bgm.mp3";

function Audio() {
    
    const audioRef = useRef(null);

    useEffect(() => {
        // play video and audio together
        audioRef.current.play();
      }, []);

    return (
        <div>
            <audio ref={audioRef} src={bgm} autostart="true" id="audio"/>
        </div>
    )

}

export default Audio;