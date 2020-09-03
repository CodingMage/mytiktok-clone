import React, { useRef, useState } from 'react';
import './video.css'
// import vid from './vid.mp4';
import VideoFotter from './VideoFotter';
import VideoSidebar from './VideoSidebar';

// import Sidebar from './Sidebar';
// import vid from './vid2.mp4';



function Video({ url, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            ></video>
            <VideoFotter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    );
}

export default Video;