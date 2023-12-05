import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Html,
  PresentationControls,
  Float,
  Text,
  useGLTF,
  Environment,
  ContactShadows,
  Sparkles,
  Stars,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/laptop.glb");

  const handlePointerEnter = (e) => {
    e.stopPropagation();
  };

  return (
    <mesh onPointerEnter={handlePointerEnter}>
      <pointLight intensity={1} color="blue" />
      <pointLight intensity={0.4} color="white" />

      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.25, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.8}>
          {/* <Sparkles
            color="violet"
            count={100}
            size={5}
            fadeIn
            scale={[25, 3, 1]}
            fadeOut
            fadeDelay={4}
            minTimeout={1}
            maxTimeout={1}
            spawnArea={{
              x: 10,
              y: -40,
              z: -40,
              width: 200,
              height: 200,
              depth: 1,
            }}
          /> */}
          <Stars
            radius={100}
            depth={5}
            count={5000}
            factor={5}
            saturation={1}
            fade
            speed={0.1}
          />
          <rectAreaLight
            width={20.5}
            height={1.65}
            intensity={100}
            color={"#ff9900"}
            rotation={[1.1, Math.PI, 1]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            object={computer.scene}
            scale={isMobile ? 0.55 : 1}
            position={isMobile ? [1.6, -4.9, -2.3] : [6, -4, -1.2]}
            rotation={[0, -0.4, 0.16]}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={3}
              position={[-0.1, 2.8, 0.1]}
              rotation-x={-0}
            >
              <iframe
                width="1903"
                height="794"
                src="https://www.youtube.com/embed/aY9m9JEy72c?autoplay=1&loop=1&controls=1"
                title="NicolettiFPS"
                frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </mesh>
  );
};

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [10, 6, 25], fov: 30 }}
      // gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={1.2}
          minPolarAngle={1.2}
          maxAzimuthAngle={Math.PI * 2}
          minAzimuthAngle={-Math.PI * -2}
        /> */}

        <Computers isMobile={isMobile} />
      </Suspense>

      {/* <Preload all /> */}
    </Canvas>
  );
};

export default LaptopCanvas;
