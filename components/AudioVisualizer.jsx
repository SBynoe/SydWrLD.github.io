import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";
import SliderComponent from "./SliderComponent";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let audioContext = null;
let source;
let newAnalyser;
let ball;
let audioElement;

const AudioVisual = ({
  songs,
  // activeIndex,
  onPlayClick,
  onPauseClick,
  // onPrev,
  // onNext,
}) => {
  const containerRef = useRef(null);
  const [context, setContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [audio, setAudio] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [animationId, setAnimationId] = useState(null);
  const [sceneInitialized, setSceneInitialized] = useState(false);
  var controls;

  const audioPlayerRef = useRef(null);

  const noise = useMemo(() => createNoise3D(), []);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = () => {
      if (!isInitialized) {
        console.log("Initializing Audio Context and THREE.js...");
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        setContext(audioContext);

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        //declare new scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        camera.position.set(0, 0, 100);
        camera.lookAt(scene.position);
        camera.rotation.z += Math.PI / 2;

        camera.updateProjectionMatrix();

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        controls = new OrbitControls(camera, renderer.domElement);

        renderer.setSize(width, height);
        renderer.render(scene, camera);

        setRenderer(renderer);
        setScene(scene);
        setCamera(camera);

        setIsInitialized(true);
      }
    };

    init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer) {
        renderer.dispose();
        setRenderer(null);
      }
    };
  }, [animationId, isInitialized]);

  useEffect(() => {
    if (context && analyser) {
      analyser.fftSize = 512;
      const bufferLength = analyser.frequencyBinCount;
      setDataArray(new Uint8Array(bufferLength));
    }
  }, [context, analyser]);

  useEffect(() => {
    if (
      scene &&
      camera &&
      renderer &&
      analyser &&
      dataArray &&
      !sceneInitialized
    ) {
      setupScene();
      setSceneInitialized(true);
    }
  }, [scene, camera, renderer, analyser, dataArray, sceneInitialized]);

  const handleResize = useCallback(() => {
    if (camera && renderer) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, [camera, renderer]);

  const startAudioContext = useCallback(() => {
    if (context && context.state === "suspended") {
      context
        .resume()
        .catch((err) => console.error("Error resuming AudioContext:", err));
    }
  }, [context]);

  const handlePauseClick = useCallback(() => {
    console.log("[Pause] === Function Start ===");
    console.log("[Pause] Current audio:", audio);
    if (audio) {
      console.log("[Pause] Audio paused state before:", audio.paused);
      audioElement.pause();
      console.log("[Pause] Audio paused state after:", audio.paused);
      setSceneInitialized(false);
    } else {
      console.warn("[Pause] No audio element to pause");
    }
    console.log("[Pause] === Function End ===");
  }, [audio]);

  const handlePlayClick = useCallback(() => {
    console.log("[Play] === Function Start ===");

    if (!audioPlayerRef.current) {
      console.warn("Audio player ref not ready");
      return;
    }

    const internalAudio = audioPlayerRef.current.audio.current;
    console.log("Retrieved internal <audio> element:", internalAudio);

    audioElement = internalAudio;
    setAudio(internalAudio);

    startAudioContext();

    if (context && audioElement) {
      if (source) source.disconnect();
      if (analyser) analyser.disconnect();

      if (!source) {
        source = context.createMediaElementSource(audioElement);
        newAnalyser = context.createAnalyser();
      }
      source.connect(newAnalyser);
      newAnalyser.connect(context.destination);
      setAnalyser(newAnalyser);

      audioElement
        .play()
        .catch((err) => console.error("Audio play failed:", err));
    }

    console.log("[Play] === Function End ===");
  }, [context, startAudioContext, analyser]);

  const setupScene = () => {
    if (scene && camera && renderer && analyser && dataArray) {
      const group = new THREE.Group();

      const planeGeometry = new THREE.PlaneGeometry(800, 800, 50, 50);
      const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x60002f,
        side: THREE.DoubleSide,
        wireframe: true,
      });

      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.position.set(0, 30, 0);

      const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
      plane2.position.set(0, -30, 0);

      const icosahedronGeometry = new THREE.IcosahedronGeometry(14, 7);
      const lambertMaterial = new THREE.MeshLambertMaterial({
        color: 0x39ff14,
        wireframe: true,
      });

      if (!ball) {
        ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
        ball.position.set(0, 0, 0);
        group.add(ball);
        const ambientLight = new THREE.AmbientLight(0xaaaaaa);
        scene.add(ambientLight);
        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.intensity = 0.9;
        spotLight.position.set(-10, 40, 20);
        spotLight.lookAt(ball);
        spotLight.castShadow = false;
        scene.add(group);
      }
      ball.position.set(0, 0, 0);

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(renderer.domElement);
      }

      const render = () => {
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.5;
        analyser.getByteFrequencyData(dataArray);

        const lowerHalfArray = dataArray.slice(0, dataArray.length / 2 - 1);
        const upperHalfArray = dataArray.slice(
          dataArray.length / 2 - 1,
          dataArray.length - 1
        );

        const lowerMax = Math.max(...lowerHalfArray);
        const lowerAvg =
          lowerHalfArray.reduce((a, b) => a + b) / lowerHalfArray.length;
        const upperMax = Math.max(...upperHalfArray);
        const upperAvg =
          upperHalfArray.reduce((a, b) => a + b) / upperHalfArray.length;

        const lowerMaxFr = lowerMax / lowerHalfArray.length;
        const lowerAvgFr = lowerAvg / lowerHalfArray.length;
        const upperMaxFr = upperMax / upperHalfArray.length;
        const upperAvgFr = upperAvg / upperHalfArray.length;

        makeRoughGround(plane, modulate(upperAvgFr, 0, 1, 0.5, 4));
        makeRoughGround(plane2, modulate(lowerMaxFr, 0, 1, 0.5, 4));
        makeRoughBall(
          ball,
          modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8),
          modulate(upperAvgFr, 0, 1, 0, 4)
        );

        renderer.render(scene, camera);
        const newAnimationId = requestAnimationFrame(render);
        setAnimationId(newAnimationId);
      };

      render();
    }
  };

  const makeRoughBall = (mesh, bassFr, treFr) => {
    const positionAttribute = mesh.geometry.getAttribute("position");
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);

      const offset = mesh.geometry.parameters.radius;
      const amp = 5;
      const time = window.performance.now();
      vertex.normalize();
      const rf = 0.00001;

      const distance =
        offset +
        bassFr +
        noise(
          vertex.x + time * rf * 5,
          vertex.y + time * rf * 6,
          vertex.z + time * rf * 7
        ) *
          amp *
          treFr;

      if (!isNaN(distance)) {
        vertex.multiplyScalar(distance);
        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
    }

    positionAttribute.needsUpdate = true;
  };

  const makeRoughGround = (mesh, distortionFr) => {
    const positionAttribute = mesh.geometry.getAttribute("position");
    const originalPositions = mesh.geometry.attributes.position.clone(); // Store original positions
    const vertex = new THREE.Vector3();

    const time = window.performance.now();
    const amp = 2;
    const rf = 0.0001; // Increased from 0.00001

    for (let i = 0; i < positionAttribute.count; i++) {
      // Get original position (before any previous distortions)
      vertex.fromBufferAttribute(originalPositions, i);

      // Calculate noise-based displacement
      const distance =
        1 + // Start from 1 to maintain base shape
        noise(
          vertex.x + time * rf * 3,
          vertex.z + time * rf * 2 // Using z instead of y for ground plane
        ) *
          amp *
          distortionFr;

      if (!isNaN(distance)) {
        // Apply displacement while preserving original direction
        vertex.multiplyScalar(distance);
        positionAttribute.setXYZ(
          i,
          vertex.x,
          originalPositions.getY(i),
          vertex.z
        );
      }
    }

    positionAttribute.needsUpdate = true; // Crucial!
    mesh.geometry.computeVertexNormals(); // Update lighting
  };

  return (
    <div
      className="audio-visual"
      id="Music"
      style={{
        position: "relative",
        width: "100%",
        //height: "350px", // Fixed height to match container
        height: "100%",
        background:
          "linear-gradient(135deg, hsla(242, 86%, 6%, 1), rgb(79, 98, 0))",
        color: "hsla(242, 86%, 6%, 1)",
        overflow: "hidden",
        borderRadius: "8px", // Optional: adds rounded corners
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          pointerEvents: "auto", // Ensures interaction works
        }}
      />

      {/* SliderComponent nested within AudioVisual */}
      <SliderComponent
        songs={songs}
        // activeIndex={activeIndex}
        onPlayClick={handlePlayClick}
        onPauseClick={handlePauseClick}
        // onPrev={onPrev}
        // onNext={onNext}
        ref={audioPlayerRef}
        style={{
          position: "absolute",
          // bottom: "20px",
          width: "100%",
          zIndex: 10,
        }}
      />
    </div>
  );
};

const fractionate = (val, minVal, maxVal) => (val - minVal) / (maxVal - minVal);

const modulate = (val, minVal, maxVal, outMin, outMax) => {
  const fr = fractionate(val, minVal, maxVal);
  return outMin + fr * (outMax - outMin);
};

export default AudioVisual;
