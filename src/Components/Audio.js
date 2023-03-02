import React, { useEffect, useState, useRef } from "react";
import bgm from "../Images/bgm.mp3";
import backgroundVideo from "../Images/bg.mp4";

function Audio() {
    
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        // play video and audio together
        const video = videoRef.current;
        const audio = audioRef.current;
        
        video.addEventListener('loadeddata', () => {
            audio.play();
          });

          return () => {
            video.removeEventListener('loadeddata');
          };


      },[]);


    return (
        <div>
             <video ref={videoRef} src={backgroundVideo} autoPlay muted  type="video/mp4" id="video" />
             <audio ref={audioRef} autostart="true">
        <source src={bgm} type="audio/mp3" />
      </audio>
        </div>
    )

}

export default Audio;