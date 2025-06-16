import React from "react";

const SliderComponent = ({
  songs,
  activeIndex,
  isPlaying,
  onPlayClick,
  onPauseClick,
  onPrev,
  onNext,
}) => {
  return (
    <div className="relative w-64 h-32 mx-auto">
      {" "}
      {/* Smaller container */}
      {/* Slider track */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center perspective-1200">
        {songs.map((song, index) => {
          const distanceFromActive = Math.abs(index - activeIndex);
          const scale = Math.max(0.5, 1 - 0.2 * distanceFromActive);
          const offset = 120; // Smaller distance between items

          return (
            <div
              key={index}
              className="absolute top-1/4 transform -translate-y-1/2 p-4 bg-[rgba(104,58,58,0.6)] rounded z-10 transition-all duration-500"
              style={{
                transform:
                  distanceFromActive === 0
                    ? "translateX(0) scale(1)"
                    : `translateX(${
                        (index - activeIndex) * offset
                      }px) scale(${scale})`,
                opacity: distanceFromActive === 0 ? 1 : 0.01 * scale,
              }}
            >
              <h3 className="text-xl font-bold text-orange-500 mb-2">
                {song.title}
              </h3>

              {/* Audio controls - layered buttons */}
              <div className="relative w-8 h-8 mx-auto">
                <button
                  onClick={() => onPlayClick(index)}
                  className={`absolute inset-0 text-white transition-opacity ${
                    isPlaying ? "opacity-0 -z-10" : "opacity-100 z-20"
                  }`}
                >
                  ▶
                </button>
                <button
                  onClick={onPauseClick}
                  className={`absolute inset-0 text-white transition-opacity ${
                    !isPlaying ? "opacity-0 -z-10" : "opacity-100 z-20"
                  }`}
                >
                  ⏸
                </button>
              </div>
            </div>
          );
        })}

        {/* Navigation arrows */}
        <button
          onClick={onPrev}
          className="absolute top-1/2 left-2 text-white bg-transparent border-none text-3xl font-mono font-bold transform -translate-y-1/2"
        >
          &lt;
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 right-2 text-white bg-transparent border-none text-3xl font-mono font-bold transform -translate-y-1/2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;




//play n pause functions
 const handlePlayClick = useCallback(
   (index) => {
     console.log("[Play] === Function Start ===");
     console.log("[Play] Current audio state:", audio ? "exists" : "null");
     if (audio) console.log("[Play] Audio paused state:", audio.paused);

     resetScene();
     console.log("[Play] Scene reset complete");

     setRenderer(renderer);
     startAudioContext();
     console.log("[Play] Audio context started");

     const audioElement = document.querySelectorAll(".audio")[index];
     console.log(`[Play] Audio element ${index} found:`, !!audioElement);

     if (context && audioElement) {
       console.log("[Play] Context and audio element available");
       console.log("[Play] Context state:", context.state);
       console.log("[Play] Audio element src:", audioElement.src);

       if (analyser) {
         console.log("[Play] Disconnecting existing analyser");
         analyser.disconnect();
         resetScene();
       }

       if (audio !== audioElement) {
         console.log("[Play] New audio element detected");
         console.log("[Play] Previous audio:", audio);
         console.log("[Play] New audio element:", audioElement);

         if (audio) {
           console.log("[Play] Pausing previous audio");
           handlePauseClick();
         }
         setAudio(audioElement);
       }

       if (!source && !newAnalyser) {
         console.log("[Play] Creating new audio nodes");
         source = context.createMediaElementSource(audioElement);
         newAnalyser = context.createAnalyser();
         source.connect(newAnalyser);
         newAnalyser.connect(context.destination);
         console.log("[Play] Audio nodes connected");

         setAnalyser(newAnalyser);

         console.log("[Play] Attempting to play audio");
         audioElement.currentTime = 0;
         const playPromise = audioElement.play();

         playPromise
           .then(() => {
             console.log("[Play] Audio play succeeded");
           })
           .catch((error) => {
             console.error("[Play] Audio play failed:", error);
           });
       } else {
         console.log("[Play] Using existing audio nodes");
         setAudio(audioElement);
         console.log("[Play] Attempting to resume playback");
         const playPromise = audio.play();

         playPromise
           .then(() => {
             console.log("[Play] Audio resume succeeded");
           })
           .catch((error) => {
             console.error("[Play] Audio resume failed:", error);
           });
       }
     } else {
       console.error("[Play] Missing context or audio element");
       if (!context) console.error("[Play] Audio context is missing");
       if (!audioElement) console.error("[Play] Audio element is missing");
     }
     console.log("[Play] === Function End ===");
   },
   [context, audio, analyser, startAudioContext, handlePauseClick]
 );

 const handlePauseClick = useCallback(() => {
   console.log("[Pause] === Function Start ===");
   console.log("[Pause] Current audio:", audio);
   if (audio) {
     console.log("[Pause] Audio paused state before:", audio.paused);
     audio.pause();
     console.log("[Pause] Audio paused state after:", audio.paused);
     setSceneInitialized(false);
   } else {
     console.warn("[Pause] No audio element to pause");
   }
   console.log("[Pause] === Function End ===");
 }, [audio]);