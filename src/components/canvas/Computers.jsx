import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useGLTF, useScroll, Preload } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const VRThinker = () => {
  const computer = useGLTF("./vrthinker/scene.gltf");
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      const offset = scroll.offset;
      ref.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI, offset); // Rotate full 180 degrees as user scrolls through
    }
  });

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={1.5} groundColor='blue' />
      <pointLight intensity={50} />
      <spotLight
        position={[-30, 50, 10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.15}
        position={[-5, -4, -1]}
        rotation={[-0.01, 0.7, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [25, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <ScrollControls pages={0.8}> {/* Adjust 'pages' based on your content length */}
          <VRThinker />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
