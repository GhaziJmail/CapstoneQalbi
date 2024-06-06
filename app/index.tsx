import React from "react";
export default function App() {
  const videoRef = React.useRef(null);

  function play() {
    videoRef.current.play();
  }

  function pause() {
    videoRef.current.pause();
  }

  return (
    <>
      <video ref={videoRef}>
        <source
          src="https://www.w3schools.com/html/movie.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}