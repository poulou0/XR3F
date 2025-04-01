import {useState} from "react";
import {Text, useVideoTexture} from "@react-three/drei";
import {Handle, HandleTarget} from "@react-three/handle";

function Video({src}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoTexture = useVideoTexture(src);

  const handlePlayPause = () => {
    if (videoTexture.image.paused) {
      videoTexture.image.play();
      videoTexture.image.muted = false;
      videoTexture.image.volume = 0.05
      setIsPlaying(true);
    } else {
      videoTexture.image.pause();
      setIsPlaying(false);
    }
  };

  return (
    <HandleTarget>
      <Handle targetRef="from-context">
        <mesh position={[0, 1, -3]}>
          <planeGeometry args={[3, 1.68]}/>
          <meshBasicMaterial map={videoTexture}/>
        </mesh>
      </Handle>
      <Text position={[0, 2, -2.8]} fontSize={0.3} color={isPlaying ? 'green' : 'red'} onClick={handlePlayPause}>
        {isPlaying ? '⏸' : '▶'}
      </Text>
    </HandleTarget>
  );
}

export default Video;
