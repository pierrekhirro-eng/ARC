import { Float, Line, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

export type ProjectVisualType =
  | "Website"
  | "Sistema"
  | "E-commerce"
  | "Automação"
  | "IA"
  | "Aplicativo"
  | "Custom";

interface ProjectPreview3DProps {
  type: ProjectVisualType;
}

function WebsiteObject() {
  return (
    <Float
      speed={1.3}
      rotationIntensity={0.18}
      floatIntensity={0.35}
    >
      <group rotation={[0.05, -0.16, 0.02]}>
        <mesh castShadow>
          <boxGeometry args={[3.4, 2.1, 0.18]} />

          <meshStandardMaterial
            color="#11161b"
            metalness={0.72}
            roughness={0.2}
            emissive="#c8ff38"
            emissiveIntensity={0.035}
          />
        </mesh>

        <mesh position={[0, 0, 0.11]}>
          <boxGeometry args={[3.05, 1.72, 0.03]} />

          <meshStandardMaterial
            color="#171d21"
            metalness={0.25}
            roughness={0.35}
          />
        </mesh>

        <mesh position={[0, -1.45, -0.02]}>
          <boxGeometry args={[0.36, 1.05, 0.18]} />

          <meshStandardMaterial
            color="#11161b"
            metalness={0.7}
            roughness={0.22}
          />
        </mesh>

        <mesh position={[0, -1.95, -0.02]}>
          <boxGeometry args={[1.45, 0.16, 0.55]} />

          <meshStandardMaterial
            color="#11161b"
            metalness={0.72}
            roughness={0.2}
          />
        </mesh>

        <pointLight
          color="#c8ff38"
          intensity={1.8}
          distance={5}
          position={[0, 0, 1]}
        />
      </group>
    </Float>
  );
}

function SystemObject() {
  return (
    <Float
      speed={1}
      rotationIntensity={0.12}
      floatIntensity={0.28}
    >
      <group>
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[2.65, 1.2, 0.28]} />

          <meshStandardMaterial
            color="#11161b"
            metalness={0.75}
            roughness={0.2}
            emissive="#c8ff38"
            emissiveIntensity={0.03}
          />
        </mesh>

        <mesh position={[0, 1.2, 0.18]}>
          <boxGeometry args={[2.2, 0.8, 0.03]} />

          <meshStandardMaterial
            color="#171d21"
            roughness={0.4}
          />
        </mesh>

        <mesh position={[-0.9, -0.55, 0]}>
          <boxGeometry args={[1.35, 0.72, 1.25]} />

          <meshStandardMaterial
            color="#12181c"
            metalness={0.7}
            roughness={0.24}
          />
        </mesh>

        <mesh position={[0.9, -0.55, 0]}>
          <boxGeometry args={[1.35, 0.72, 1.25]} />

          <meshStandardMaterial
            color="#12181c"
            metalness={0.7}
            roughness={0.24}
          />
        </mesh>

        <Line
          points={[
            [-0.7, 0.65, 0],
            [-0.55, 0.1, 0],
            [-0.9, -0.16, 0],
          ]}
          color="#c8ff38"
          lineWidth={1}
          transparent
          opacity={0.65}
        />

        <Line
          points={[
            [0.7, 0.65, 0],
            [0.55, 0.1, 0],
            [0.9, -0.16, 0],
          ]}
          color="#c8ff38"
          lineWidth={1}
          transparent
          opacity={0.65}
        />

        <pointLight
          color="#c8ff38"
          intensity={2.1}
          distance={5}
          position={[0, 0, 1.2]}
        />
      </group>
    </Float>
  );
}

function EcommerceObject() {
  return (
    <Float
      speed={1.15}
      rotationIntensity={0.22}
      floatIntensity={0.4}
    >
      <group rotation={[0.1, -0.25, -0.06]}>
        <mesh castShadow>
          <boxGeometry args={[2.5, 2.15, 2.5]} />

          <meshStandardMaterial
            color="#181b20"
            metalness={0.35}
            roughness={0.34}
            emissive="#c8ff38"
            emissiveIntensity={0.025}
          />
        </mesh>

        <mesh position={[0, 0, 1.27]}>
          <boxGeometry args={[1.85, 0.75, 0.05]} />

          <meshStandardMaterial
            color="#c8ff38"
            emissive="#c8ff38"
            emissiveIntensity={0.14}
            roughness={0.25}
          />
        </mesh>

        <mesh
          position={[0, 1.15, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <torusGeometry args={[0.5, 0.07, 16, 40, Math.PI]} />

          <meshStandardMaterial
            color="#20262b"
            metalness={0.8}
            roughness={0.18}
          />
        </mesh>

        <pointLight
          color="#c8ff38"
          intensity={2}
          distance={5}
          position={[0, 0, 2.2]}
        />
      </group>
    </Float>
  );
}

function AutomationObject() {
  const points = [
    [-1.7, 1.2, 0],
    [0, 0.3, 0],
    [1.7, 1.05, 0],
    [1.35, -1.15, 0],
    [-0.8, -1.1, 0],
  ] as const;

  return (
    <Float
      speed={1.05}
      rotationIntensity={0.08}
      floatIntensity={0.35}
    >
      <group>
        <Line
          points={points}
          color="#c8ff38"
          lineWidth={1}
          transparent
          opacity={0.48}
        />

        {points.map((position, index) => (
          <mesh key={`${position.join("-")}-${index}`} position={position}>
            <sphereGeometry args={[0.32, 24, 24]} />

            <meshStandardMaterial
              color={index === 1 ? "#c8ff38" : "#11171b"}
              emissive="#c8ff38"
              emissiveIntensity={index === 1 ? 0.18 : 0.035}
              metalness={0.68}
              roughness={0.2}
            />
          </mesh>
        ))}

        <pointLight
          color="#c8ff38"
          intensity={2}
          distance={5}
          position={[0, 0.3, 1]}
        />
      </group>
    </Float>
  );
}

function AIObject() {
  return (
    <Float
      speed={1.4}
      rotationIntensity={0.22}
      floatIntensity={0.5}
    >
      <group>
        <mesh>
          <icosahedronGeometry args={[1.35, 4]} />

          <meshStandardMaterial
            color="#11171b"
            metalness={0.88}
            roughness={0.13}
            emissive="#c8ff38"
            emissiveIntensity={0.08}
            wireframe
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.76, 48, 48]} />

          <meshStandardMaterial
            color="#c8ff38"
            emissive="#c8ff38"
            emissiveIntensity={0.42}
            metalness={0.25}
            roughness={0.15}
          />
        </mesh>

        <mesh scale={0.5}>
          <icosahedronGeometry args={[1.2, 2]} />

          <meshStandardMaterial
            color="#12181b"
            metalness={0.72}
            roughness={0.17}
            transparent
            opacity={0.68}
          />
        </mesh>

        <pointLight
          color="#c8ff38"
          intensity={5}
          distance={6}
          position={[0, 0, 1.5]}
        />
      </group>
    </Float>
  );
}

function AppObject() {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.16}
      floatIntensity={0.34}
    >
      <group rotation={[0.08, -0.13, 0.04]}>
        <mesh castShadow>
          <boxGeometry args={[1.9, 3.5, 0.32]} />

          <meshStandardMaterial
            color="#11161b"
            metalness={0.78}
            roughness={0.18}
          />
        </mesh>

        <mesh position={[0, 0.18, 0.18]}>
          <boxGeometry args={[1.56, 2.65, 0.04]} />

          <meshStandardMaterial
            color="#151b20"
            roughness={0.38}
            emissive="#c8ff38"
            emissiveIntensity={0.035}
          />
        </mesh>

        <mesh position={[0, -1.38, 0.2]}>
          <sphereGeometry args={[0.08, 20, 20]} />

          <meshStandardMaterial
            color="#c8ff38"
            emissive="#c8ff38"
            emissiveIntensity={0.6}
          />
        </mesh>

        <pointLight
          color="#c8ff38"
          intensity={1.8}
          distance={4.5}
          position={[0, 0, 1]}
        />
      </group>
    </Float>
  );
}

function CustomObject() {
  const modules = [
    [-1.3, 0.8, 0],
    [0, 1.55, 0],
    [1.3, 0.8, 0],
    [-0.8, -0.7, 0],
    [0.8, -0.7, 0],
    [0, -1.7, 0],
  ] as const;

  return (
    <Float
      speed={1}
      rotationIntensity={0.12}
      floatIntensity={0.35}
    >
      <group>
        <Line
          points={[
            [-1.3, 0.8, 0],
            [0, 1.55, 0],
            [1.3, 0.8, 0],
            [0.8, -0.7, 0],
            [0, -1.7, 0],
            [-0.8, -0.7, 0],
            [-1.3, 0.8, 0],
          ]}
          color="#c8ff38"
          lineWidth={0.8}
          transparent
          opacity={0.42}
        />

        {modules.map((position, index) => (
          <mesh key={`${position.join("-")}-${index}`} position={position}>
            <boxGeometry args={[0.82, 0.82, 0.82]} />

            <meshStandardMaterial
              color={index === 5 ? "#c8ff38" : "#11171b"}
              metalness={0.74}
              roughness={0.18}
              emissive="#c8ff38"
              emissiveIntensity={index === 5 ? 0.12 : 0.035}
            />
          </mesh>
        ))}

        <pointLight
          color="#c8ff38"
          intensity={2.6}
          distance={6}
          position={[0, 0, 1.4]}
        />
      </group>
    </Float>
  );
}

function ProjectObject({ type }: ProjectPreview3DProps) {
  switch (type) {
    case "Website":
      return <WebsiteObject />;

    case "Sistema":
      return <SystemObject />;

    case "E-commerce":
      return <EcommerceObject />;

    case "Automação":
      return <AutomationObject />;

    case "IA":
      return <AIObject />;

    case "Aplicativo":
      return <AppObject />;

    case "Custom":
    default:
      return <CustomObject />;
  }
}

export function ProjectPreview3D({
  type,
}: ProjectPreview3DProps) {
  const lights: ReactNode = (
    <>
      <ambientLight intensity={0.38} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={2.2}
        color="#ffffff"
      />

      <pointLight
        position={[-4, 1, 4]}
        intensity={3.5}
        distance={10}
        color="#c8ff38"
      />
    </>
  );

  return (
    <div
      className="project-preview-3d"
      aria-label={`Visualização 3D de ${type}`}
    >
      <Canvas
        camera={{
          position: [0, 0.4, 7],
          fov: 38,
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
          args={["#090c10", 7, 15]}
        />

        {lights}

        <ProjectObject type={type} />

        <gridHelper
          args={[9, 18, "#29361d", "#172019"]}
          position={[0, -2.15, 0]}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={5}
          maxDistance={8}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.65}
          autoRotate
          autoRotateSpeed={0.55}
        />
      </Canvas>

      <div className="project-preview-overlay">
        <span>3D PREVIEW</span>

        <span>
          {type}
        </span>
      </div>

      <div className="project-preview-corner">
        ARC / BUILD
      </div>
    </div>
  );
}