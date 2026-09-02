import { Float, Grid, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { BoxGeometry } from "three";

interface SystemNodeProps {
  label: string;
  position: [number, number, number];
  size?: number;
}

function SystemNode({
  label,
  position,
  size = 1,
}: SystemNodeProps) {
  const edgeGeometry = useMemo(
    () => new BoxGeometry(1.8, 1.05, 1.8),
    [],
  );

  return (
    <Float
      speed={1.15}
      rotationIntensity={0.12}
      floatIntensity={0.35}
    >
      <group
        position={position}
        scale={size}
      >
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.8, 1.05, 1.8]} />

          <meshStandardMaterial
            color="#101419"
            metalness={0.82}
            roughness={0.2}
            emissive="#c8ff38"
            emissiveIntensity={0.045}
          />
        </mesh>

        <lineSegments geometry={edgeGeometry}>
          <lineBasicMaterial
            color="#c8ff38"
            transparent
            opacity={0.52}
          />
        </lineSegments>

        <pointLight
          color="#c8ff38"
          intensity={1.55}
          distance={4}
          position={[0, 0.85, 0]}
        />

        <Html
          transform
          center
          distanceFactor={4.6}
          position={[0, 0, 0.93]}
          pointerEvents="none"
        >
          <div className="scene-node-label">
            {label}
          </div>
        </Html>
      </group>
    </Float>
  );
}

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
}

function Connection({
  start,
  end,
}: ConnectionProps) {
  const positions = useMemo(
    () =>
      new Float32Array([
        start[0],
        start[1],
        start[2],
        end[0],
        end[1],
        end[2],
      ]),
    [start, end],
  );

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <lineBasicMaterial
        color="#c8ff38"
        transparent
        opacity={0.32}
      />
    </line>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[4, 7, 5]}
        intensity={2.2}
        color="#ffffff"
      />

      <pointLight
        position={[-4, 1, 4]}
        intensity={4}
        distance={10}
        color="#c8ff38"
      />

      <pointLight
        position={[4, -1, -3]}
        intensity={1.8}
        distance={8}
        color="#8fa934"
      />

      <Grid
        position={[0, -2.05, 0]}
        args={[14, 14]}
        cellSize={0.65}
        cellThickness={0.45}
        cellColor="#263119"
        sectionSize={3}
        sectionThickness={0.8}
        sectionColor="#4d5f27"
        fadeDistance={10}
        fadeStrength={1.65}
        infiniteGrid
      />

      <Connection
        start={[-1.9, 1.15, 0]}
        end={[1.65, 0.15, 0]}
      />

      <Connection
        start={[1.65, 0.15, 0]}
        end={[0, -1.15, 0]}
      />

      <Connection
        start={[-1.9, 1.15, 0]}
        end={[0, -1.15, 0]}
      />

      <SystemNode
        label="WEB"
        position={[-1.9, 1.15, 0]}
        size={1}
      />

      <SystemNode
        label="API"
        position={[1.65, 0.15, 0]}
        size={0.9}
      />

      <SystemNode
        label="AI"
        position={[0, -1.15, 0]}
        size={0.92}
      />

      <Float
        speed={0.75}
        rotationIntensity={0.13}
        floatIntensity={0.4}
      >
        <mesh
          position={[0, 2.72, -1.1]}
          castShadow
        >
          <icosahedronGeometry args={[0.58, 1]} />

          <meshStandardMaterial
            color="#c8ff38"
            emissive="#c8ff38"
            emissiveIntensity={0.32}
            metalness={0.48}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.38}
        minPolarAngle={Math.PI / 2.55}
        maxPolarAngle={Math.PI / 1.82}
      />
    </>
  );
}

export function HeroScene3D() {
  return (
    <div
      className="hero-scene"
      aria-label="Visualização 3D de um sistema digital conectado"
    >
      <Canvas
        camera={{
          position: [0, 1.7, 8],
          fov: 34,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <color
          attach="background"
          args={["#090c10"]}
        />

        <fog
          attach="fog"
          args={["#090c10", 8, 16]}
        />

        <SceneContent />
      </Canvas>

      <div
        className="hero-scene-ui"
        aria-hidden="true"
      >
        <span className="scene-ui-tag">
          LIVE SYSTEM
        </span>

        <span className="scene-ui-status">
          <i />
          Connected
        </span>
      </div>
    </div>
  );
}