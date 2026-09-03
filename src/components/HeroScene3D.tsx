import {
  Float,
  Line,
  OrbitControls,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { ReactNode } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

type ModuleConfig = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
};

const LIME = "#c8ff38";
const LIME_SOFT = "#92bc28";
const DARK = "#0a0d0f";

function Core() {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.28;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.65) * 0.04;

    if (coreRef.current) {
      const pulse =
        1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.035;

      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial
          color={LIME}
          emissive={LIME}
          emissiveIntensity={2.5}
          metalness={0.35}
          roughness={0.22}
          toneMapped={false}
        />
      </mesh>

      <mesh scale={1.32}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color={LIME}
          wireframe
          transparent
          opacity={0.16}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.48}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={LIME_SOFT}
          wireframe
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>

      <pointLight
        color={LIME}
        intensity={7}
        distance={5.5}
        decay={2}
      />
    </group>
  );
}

function EnergyRing({
  radius,
  rotation,
  speed,
  opacity = 0.45,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  opacity?: number;
}) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.z += delta * speed;
  });

  const points = useMemo(() => {
    const result: [number, number, number][] = [];

    const segments = 96;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;

      result.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0,
      ]);
    }

    return result;
  }, [radius]);

  return (
    <group
      ref={groupRef}
      rotation={rotation}
    >
      <Line
        points={points}
        color={LIME}
        lineWidth={1.2}
        transparent
        opacity={opacity}
      />
    </group>
  );
}

function FloatingModule({
  config,
  index,
}: {
  config: ModuleConfig;
  index: number;
}) {
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * (0.14 + index * 0.025);

    ref.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.75 +
          index * 1.7,
      ) * 0.08;
  });

  return (
    <group
      ref={ref}
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    >
      <RoundedBox
        args={[1.45, 0.72, 0.18]}
        radius={0.06}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={DARK}
          metalness={0.7}
          roughness={0.24}
          emissive={LIME}
          emissiveIntensity={0.05}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[1.12, 0.34]} />
        <meshBasicMaterial
          color={LIME}
          transparent
          opacity={0.05}
        />
      </mesh>

      <mesh position={[-0.52, 0, 0.105]}>
        <boxGeometry args={[0.12, 0.12, 0.02]} />
        <meshBasicMaterial
          color={LIME}
          toneMapped={false}
        />
      </mesh>

      <mesh position={[0.04, 0.05, 0.105]}>
        <boxGeometry args={[0.55, 0.025, 0.02]} />
        <meshBasicMaterial
          color={LIME_SOFT}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh position={[0.04, -0.05, 0.105]}>
        <boxGeometry args={[0.38, 0.018, 0.02]} />
        <meshBasicMaterial
          color={LIME_SOFT}
          transparent
          opacity={0.35}
        />
      </mesh>

      <pointLight
        color={LIME}
        intensity={0.65}
        distance={2}
        decay={2}
      />
    </group>
  );
}

function ConnectionNodes() {
  const groupRef = useRef<Group>(null);

  const nodes = useMemo(
    () => [
      [-2.25, 1.1, 0.15],
      [2.2, 0.92, -0.1],
      [-1.95, -1.05, 0.2],
      [2.05, -1.15, 0.1],
      [0.05, 2.05, -0.2],
    ],
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((position, index) => (
        <Float
          key={index}
          speed={1.1 + index * 0.1}
          rotationIntensity={0.2}
          floatIntensity={0.22}
        >
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.045, 12, 12]} />

            <meshBasicMaterial
              color={LIME}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}

      <Line
        points={[
          [-2.25, 1.1, 0.15],
          [-0.72, 0.32, 0],
          [0, 0, 0],
        ]}
        color={LIME}
        lineWidth={0.45}
        transparent
        opacity={0.25}
      />

      <Line
        points={[
          [2.2, 0.92, -0.1],
          [0.62, 0.22, 0],
          [0, 0, 0],
        ]}
        color={LIME}
        lineWidth={0.45}
        transparent
        opacity={0.25}
      />

      <Line
        points={[
          [-1.95, -1.05, 0.2],
          [-0.58, -0.22, 0],
          [0, 0, 0],
        ]}
        color={LIME}
        lineWidth={0.45}
        transparent
        opacity={0.22}
      />

      <Line
        points={[
          [2.05, -1.15, 0.1],
          [0.68, -0.28, 0],
          [0, 0, 0],
        ]}
        color={LIME}
        lineWidth={0.45}
        transparent
        opacity={0.22}
      />

      <Line
        points={[
          [0.05, 2.05, -0.2],
          [0.04, 0.72, 0],
          [0, 0, 0],
        ]}
        color={LIME}
        lineWidth={0.45}
        transparent
        opacity={0.22}
      />
    </group>
  );
}

function OrbitalMarkers() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y -= delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[2.7, 0.65, 0]}>
        <sphereGeometry args={[0.075, 14, 14]} />
        <meshBasicMaterial
          color={LIME}
          toneMapped={false}
        />
      </mesh>

      <mesh position={[-2.45, -0.65, 0]}>
        <sphereGeometry args={[0.055, 14, 14]} />
        <meshBasicMaterial
          color={LIME}
          toneMapped={false}
        />
      </mesh>

      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.045, 14, 14]} />
        <meshBasicMaterial
          color={LIME}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function SceneContents() {
  const groupRef = useRef<Group>(null);

  const modules: ModuleConfig[] = [
    {
      position: [-1.85, 1.05, 0.35],
      scale: [0.85, 0.85, 0.85],
      rotation: [0.08, -0.42, 0.12],
    },
    {
      position: [1.8, 0.92, -0.1],
      scale: [0.74, 0.74, 0.74],
      rotation: [-0.04, 0.5, -0.08],
    },
    {
      position: [-1.75, -1.05, -0.15],
      scale: [0.72, 0.72, 0.72],
      rotation: [0.12, 0.35, -0.16],
    },
    {
      position: [1.7, -1.05, 0.2],
      scale: [0.8, 0.8, 0.8],
      rotation: [-0.14, -0.45, 0.12],
    },
  ];

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.22) * 0.055;

    groupRef.current.rotation.x =
      Math.cos(state.clock.elapsedTime * 0.17) * 0.025;
  });

  return (
    <group ref={groupRef}>
      <Core />

      <EnergyRing
        radius={1.7}
        rotation={[Math.PI * 0.28, 0.1, 0]}
        speed={0.22}
        opacity={0.38}
      />

      <EnergyRing
        radius={2.1}
        rotation={[Math.PI * 0.67, 0.24, 0.4]}
        speed={-0.16}
        opacity={0.28}
      />

      <EnergyRing
        radius={2.55}
        rotation={[1.15, -0.35, 0]}
        speed={0.1}
        opacity={0.2}
      />

      {modules.map((module, index) => (
        <FloatingModule
          key={index}
          config={module}
          index={index}
        />
      ))}

      <ConnectionNodes />
      <OrbitalMarkers />
    </group>
  );
}

function GroundGrid() {
  return (
    <gridHelper
      args={[10, 22, "#263114", "#11170d"]}
      position={[0, -2.2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.32} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.6}
      />

      <pointLight
        position={[0, 1.5, 2]}
        color={LIME}
        intensity={2.2}
        distance={7}
      />

      <pointLight
        position={[-4, -2, 3]}
        color={LIME_SOFT}
        intensity={1}
        distance={6}
      />
    </>
  );
}

function SceneEnvironment() {
  return (
    <>
      <Sparkles
        count={90}
        scale={[7, 5, 5]}
        size={0.75}
        speed={0.2}
        color={LIME}
      />

      <Sparkles
        count={35}
        scale={[9, 6, 7]}
        size={1.1}
        speed={0.08}
        color="#71852d"
      />

      <fog
        attach="fog"
        args={["#07090b", 7, 13]}
      />
    </>
  );
}

function CameraController() {
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableDamping
      dampingFactor={0.075}
      autoRotate
      autoRotateSpeed={0.35}
      minPolarAngle={Math.PI * 0.36}
      maxPolarAngle={Math.PI * 0.64}
    />
  );
}

function Stage({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <group
      rotation={[
        THREE.MathUtils.degToRad(2),
        THREE.MathUtils.degToRad(-7),
        0,
      ]}
    >
      {children}
    </group>
  );
}

export default function HeroScene3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0.25, 7.4],
          fov: 36,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <SceneEnvironment />
        <SceneLights />

        <Stage>
          <SceneContents />
          <GroundGrid />
        </Stage>

        <CameraController />
      </Canvas>
    </div>
  );
}