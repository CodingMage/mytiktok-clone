import React, { useRef, useState } from 'react';
import './video.css'
import vid from './vid.mp4';
// import vid from './vid2.mp4';


const Video = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)

        } else {
            videoRef.current.play();
            setPlaying(true)

        }
    }

    return (
        <div className='video'>
            <video
                className='video__player'
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={vid}></video>
        </div>
    );
};

export default Video;