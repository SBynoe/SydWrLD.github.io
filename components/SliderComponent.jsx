import React from "react";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/myStyles.css";
import "react-h5-audio-player/lib/myStyles.css";

const SliderComponent = React.forwardRef(
  ({ songs, onPlayClick, onPauseClick }, ref) => {
    return (
      <div className="relative w-auto h-auto mx-auto text-center text-orange-500  align-baseline">
        <div>
          {songs.map((song, index) => (
            <div key={index} className="">
              <div id="item">
                <div id="title" className="title">
                  {/* <p>Showcase: </p>
                  {song.title} */}
                </div>
                <audio className="audio" src={song.src}></audio>
                <AudioPlayer
                  key={index}
                  ref={ref}
                  src={song.src}
                  onPlay={onPlayClick}
                  onPause={onPauseClick}
                  onLoadedMetadata={(e) => onAudioRef(index, e.target)}
                />
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    );
  }
);

export default SliderComponent;
