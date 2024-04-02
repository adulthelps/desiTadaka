// YouTubePlayer.tsx
import React from 'react';
import YouTube from 'react-youtube';
import './home.scss';

interface YouTubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {

  

    return (
        <div className='youtube-container'>
            <YouTube videoId={videoId} className='youtube' />
        </div>
    );
};

export default YouTubePlayer;
