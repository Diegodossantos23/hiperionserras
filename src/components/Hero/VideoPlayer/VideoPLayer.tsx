import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, ...props }) => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute'
      }}
      {...props}
    >
      <source src={src} type="video/mp4" />
      {/* Adicione aqui mais formatos de vídeo, se necessário */}
    </video>
  );
};

export default VideoPlayer;
