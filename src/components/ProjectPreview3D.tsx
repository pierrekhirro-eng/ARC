import {
  Float,
  Line,
  OrbitControls,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";
import "./ProjectPreview3D.css";

export type ProjectVisualType =
  | "Website"
  | "Sistema"
  | "E-commerce"
  | "Automação"
  | "IA"
  | "Aplicativo"
  | "Custom";

type Environment = {
  code: string;
  title: string;
  status: string;
  metrics: string[];
};

const ENVIRONMENTS: Record<ProjectVisualType, Environment> = {
  Website: {
    code: "WEB / 01",
    title: "Website",
    status: "ONLINE",
    metrics: ["UI", "RESPONSIVE", "CMS"],
  },

  Sistema: {
    code: "SYS / 02",
    title: "Sistema",
    status: "CONNECTED",
    metrics: ["API", "DATABASE", "AUTH"],
  },

  "E-commerce": {
    code: "COM / 03",
    title: "E-commerce",
    status: "READY",
    metrics: ["CHECKOUT", "PAYMENTS", "ORDERS"],
  },

  Automação: {
    code: "AUT / 04",
    title: "Automação",
    status: "RUNNING",
    metrics: ["FLOW", "TRIGGERS", "ACTIONS"],
  },

  IA: {
    code: "AI / 05",
    title: "Inteligência Artificial",
    status: "ACTIVE",
    metrics: ["MODEL", "CONTEXT", "AGENTS"],
  },

  Aplicativo: {
    code: "APP / 06",
    title: "Aplicativo",
    status: "MOBILE",
    metrics: ["IOS", "ANDROID", "UX"],
  },

  Custom: {
    code: "ARC / 07",
    title: "Projeto Custom",
    status: "BUILDING",
    metrics: ["CUSTOM", "MODULAR", "SCALABLE"],
  },
};

/* ============================================================================
   WEBSITE
   ========================================================================== */

function WebsiteObject() {
  return (
    <Float
      speed={0.8}
      rotationIntensity={0.08}
      floatIntensity={0.2}
      floatingRange={[-0.05, 0.05]}
    >
      <group rotation={[0.02, -0.14, 0]}>
        <RoundedBox
          args={[3.2, 2.05, 0.2]}
          radius={0.14}
          smoothness={7}
        >
          <meshStandardMaterial
            color="#141a1d"
            metalness={0.82}
            roughness={0.24}
          />
        </RoundedBox>

        <RoundedBox
          args={[2.88, 1.73, 0.035]}
          radius={0.08}
          smoothness={5}
          position={[0, 0, 0.125]}
        >
          <meshStandardMaterial
            color="#090d0f"
            metalness={0.35}
            roughness={0.32}
          />
        </RoundedBox>

        <mesh position={[0, 0.68, 0.15]}>
          <boxGeometry args={[2.45, 0.06, 0.025]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        <mesh position={[-0.73, 0.2, 0.15]}>
          <boxGeometry args={[1.08, 0.08, 0.025]} />
          <meshBasicMaterial color="#f4f5f5" />
        </mesh>

        <mesh position={[-0.73, 0.03, 0.15]}>
          <boxGeometry args={[0.82, 0.045, 0.025]} />
          <meshBasicMaterial color="#616b70" />
        </mesh>

        <mesh position={[-0.73, -0.11, 0.15]}>
          <boxGeometry args={[0.7, 0.045, 0.025]} />
          <meshBasicMaterial color="#3c4549" />
        </mesh>

        <RoundedBox
          args={[0.76, 0.66, 0.035]}
          radius={0.06}
          smoothness={4}
          position={[0.84, -0.02, 0.15]}
        >
          <meshStandardMaterial
            color="#1c2529"
            metalness={0.45}
            roughness={0.35}
          />
        </RoundedBox>

        <mesh position={[0.84, 0.07, 0.18]}>
          <boxGeometry args={[0.34, 0.34, 0.02]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        <mesh position={[0, -1.2, -0.02]}>
          <boxGeometry args={[0.16, 0.42, 0.2]} />
          <meshStandardMaterial
            color="#121719"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        <mesh position={[0, -1.42, -0.02]}>
          <boxGeometry args={[1.05, 0.08, 0.42]} />
          <meshStandardMaterial
            color="#101416"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ============================================================================
   SISTEMA
   ========================================================================== */

function SystemObject() {
  const nodes = [
    [-1.38, 0.72, 0] as const,
    [1.38, 0.72, 0] as const,
    [-1.38, -0.72, 0] as const,
    [1.38, -0.72, 0] as const,
  ];

  return (
    <Float
      speed={0.72}
      rotationIntensity={0.07}
      floatIntensity={0.18}
      floatingRange={[-0.05, 0.05]}
    >
      <group>
        {nodes.map((node, index) => {
          const centerX = node[0] > 0 ? 0.72 : -0.72;
          const centerY = node[1] > 0 ? 0.34 : -0.34;

          return (
            <Line
              key={`connection-${index}`}
              points={[
                [centerX, centerY, 0],
                node,
              ]}
              color="#c8ff38"
              lineWidth={1}
              transparent
              opacity={0.42}
            />
          );
        })}

        <RoundedBox
          args={[1.6, 1.32, 1]}
          radius={0.16}
          smoothness={7}
        >
          <meshStandardMaterial
            color="#151c20"
            metalness={0.86}
            roughness={0.22}
          />
        </RoundedBox>

        <RoundedBox
          args={[0.95, 0.62, 0.035]}
          radius={0.06}
          smoothness={5}
          position={[0, 0, 0.52]}
        >
          <meshStandardMaterial
            color="#0b1012"
            metalness={0.35}
            roughness={0.32}
          />
        </RoundedBox>

        <mesh position={[0, 0.12, 0.55]}>
          <boxGeometry args={[0.5, 0.055, 0.02]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        <mesh position={[0, -0.02, 0.55]}>
          <boxGeometry args={[0.32, 0.04, 0.02]} />
          <meshBasicMaterial color="#697378" />
        </mesh>

        <mesh position={[0, -0.14, 0.55]}>
          <boxGeometry args={[0.42, 0.04, 0.02]} />
          <meshBasicMaterial color="#394247" />
        </mesh>

        {nodes.map((node, index) => (
          <group key={`module-${index}`} position={node}>
            <RoundedBox
              args={[0.52, 0.52, 0.35]}
              radius={0.09}
              smoothness={5}
            >
              <meshStandardMaterial
                color="#11171a"
                metalness={0.78}
                roughness={0.26}
              />
            </RoundedBox>

            <mesh position={[0, 0, 0.2]}>
              <boxGeometry args={[0.18, 0.18, 0.03]} />
              <meshBasicMaterial color="#c8ff38" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

/* ============================================================================
   E-COMMERCE
   ========================================================================== */

function EcommerceObject() {
  return (
    <Float
      speed={0.78}
      rotationIntensity={0.09}
      floatIntensity={0.2}
      floatingRange={[-0.05, 0.05]}
    >
      <group rotation={[0.05, -0.2, 0]}>
        <RoundedBox
          args={[1.65, 1.48, 1.42]}
          radius={0.16}
          smoothness={7}
        >
          <meshStandardMaterial
            color="#161b1e"
            metalness={0.45}
            roughness={0.36}
          />
        </RoundedBox>

        <RoundedBox
          args={[1.42, 0.1, 1.22]}
          radius={0.04}
          smoothness={4}
          position={[0, 0.77, 0]}
        >
          <meshStandardMaterial
            color="#1d2529"
            metalness={0.48}
            roughness={0.32}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.73]}>
          <planeGeometry args={[0.7, 0.7]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        <mesh position={[0, 0, 0.755]}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial color="#0a0d0f" />
        </mesh>

        <RoundedBox
          args={[1.08, 0.55, 0.06]}
          radius={0.06}
          smoothness={4}
          position={[1.08, 0.35, 0.05]}
        >
          <meshStandardMaterial
            color="#11171a"
            metalness={0.5}
            roughness={0.3}
          />
        </RoundedBox>

        <mesh position={[1.08, 0.46, 0.09]}>
          <boxGeometry args={[0.65, 0.07, 0.02]} />
          <meshBasicMaterial color="#f1f3f3" />
        </mesh>

        <mesh position={[1.08, 0.29, 0.09]}>
          <boxGeometry args={[0.48, 0.05, 0.02]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        <mesh position={[0, -0.9, 0]}>
          <boxGeometry args={[2.05, 0.08, 1.5]} />
          <meshStandardMaterial
            color="#0d1113"
            metalness={0.65}
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ============================================================================
   AUTOMAÇÃO
   ========================================================================== */

function AutomationObject() {
  const nodes = [
    [-1.55, 0.7, 0] as const,
    [0, 0, 0] as const,
    [1.55, -0.7, 0] as const,
  ];

  return (
    <Float
      speed={0.78}
      rotationIntensity={0.07}
      floatIntensity={0.2}
      floatingRange={[-0.05, 0.05]}
    >
      <group>
        <Line
          points={nodes}
          color="#c8ff38"
          lineWidth={1.35}
          transparent
          opacity={0.55}
        />

        {nodes.map((node, index) => (
          <group key={index} position={node}>
            <mesh>
              <sphereGeometry args={[0.27, 28, 28]} />

              <meshStandardMaterial
                color={
                  index === 1
                    ? "#c8ff38"
                    : "#151c20"
                }
                emissive={
                  index === 1
                    ? "#7ca91b"
                    : "#000000"
                }
                emissiveIntensity={
                  index === 1 ? 0.5 : 0
                }
                metalness={0.62}
                roughness={0.22}
              />
            </mesh>

            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.4, 0.43, 40]} />
              <meshBasicMaterial
                color="#c8ff38"
                transparent
                opacity={0.18}
                side={THREE.DoubleSide}
              />
            </mesh>

            <mesh position={[0, 0, 0.27]}>
              <sphereGeometry args={[0.055, 12, 12]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

/* ============================================================================
   IA
   ========================================================================== */

function AIObject() {
  const orbitRef = useRef<Group | null>(null);

  useFrame((_, delta) => {
    if (!orbitRef.current) {
      return;
    }

    orbitRef.current.rotation.y += delta * 0.3;
    orbitRef.current.rotation.x += delta * 0.06;
  });

  return (
    <Float
      speed={0.62}
      rotationIntensity={0.05}
      floatIntensity={0.17}
      floatingRange={[-0.04, 0.04]}
    >
      <group>
        <mesh>
          <icosahedronGeometry args={[0.88, 2]} />

          <meshStandardMaterial
            color="#c8ff38"
            emissive="#6f9618"
            emissiveIntensity={0.65}
            metalness={0.28}
            roughness={0.18}
          />
        </mesh>

        <mesh scale={1.18}>
          <icosahedronGeometry args={[0.88, 2]} />

          <meshBasicMaterial
            color="#c8ff38"
            wireframe
            transparent
            opacity={0.26}
          />
        </mesh>

        <group ref={orbitRef}>
          <Line
            points={[
              [-1.55, 0, 0],
              [0, 1.55, 0],
              [1.55, 0, 0],
              [0, -1.55, 0],
              [-1.55, 0, 0],
            ]}
            color="#c8ff38"
            lineWidth={1}
            transparent
            opacity={0.32}
          />

          {[
            [1.55, 0, 0],
            [-1.55, 0, 0],
            [0, 1.55, 0],
            [0, -1.55, 0],
          ].map((position, index) => (
            <mesh
              key={index}
              position={
                position as [number, number, number]
              }
            >
              <sphereGeometry args={[0.095, 18, 18]} />
              <meshBasicMaterial color="#c8ff38" />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
}

/* ============================================================================
   APLICATIVO
   ========================================================================== */

function AppObject() {
  return (
    <Float
      speed={0.72}
      rotationIntensity={0.07}
      floatIntensity={0.18}
      floatingRange={[-0.05, 0.05]}
    >
      <group rotation={[0, -0.12, 0]}>
        <RoundedBox
          args={[1.42, 2.65, 0.2]}
          radius={0.18}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#111619"
            metalness={0.82}
            roughness={0.23}
          />
        </RoundedBox>

        <RoundedBox
          args={[1.14, 2.34, 0.035]}
          radius={0.12}
          smoothness={6}
          position={[0, 0, 0.12]}
        >
          <meshStandardMaterial
            color="#090d0f"
            metalness={0.3}
            roughness={0.3}
          />
        </RoundedBox>

        <mesh position={[-0.4, 1.02, 0.15]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshBasicMaterial color="#353d40" />
        </mesh>

        <mesh position={[0, 0.57, 0.15]}>
          <boxGeometry args={[0.75, 0.42, 0.025]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        <mesh position={[0, -0.05, 0.15]}>
          <boxGeometry args={[0.78, 0.07, 0.025]} />
          <meshBasicMaterial color="#e5e8e8" />
        </mesh>

        <mesh position={[0, -0.23, 0.15]}>
          <boxGeometry args={[0.62, 0.045, 0.025]} />
          <meshBasicMaterial color="#5c666a" />
        </mesh>

        <RoundedBox
          args={[0.65, 0.25, 0.035]}
          radius={0.06}
          smoothness={4}
          position={[0, -0.7, 0.15]}
        >
          <meshStandardMaterial
            color="#c8ff38"
            emissive="#668f12"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

/* ============================================================================
   CUSTOM
   ========================================================================== */

function CustomObject() {
  return (
    <Float
      speed={0.7}
      rotationIntensity={0.07}
      floatIntensity={0.19}
      floatingRange={[-0.05, 0.05]}
    >
      <group rotation={[0.03, -0.15, 0]}>
        <RoundedBox
          args={[1.25, 1.25, 1.25]}
          radius={0.15}
          smoothness={7}
        >
          <meshStandardMaterial
            color="#151b1e"
            metalness={0.85}
            roughness={0.22}
          />
        </RoundedBox>

        <RoundedBox
          args={[0.74, 0.74, 0.74]}
          radius={0.11}
          smoothness={6}
          position={[0, 0, 0.82]}
        >
          <meshStandardMaterial
            color="#20282c"
            metalness={0.75}
            roughness={0.22}
          />
        </RoundedBox>

        <mesh position={[0, 0, 1.2]}>
          <boxGeometry args={[0.28, 0.28, 0.06]} />
          <meshBasicMaterial color="#c8ff38" />
        </mesh>

        {[
          [-1.05, 0.62, 0],
          [-1.05, -0.62, 0],
          [1.05, 0.62, 0],
          [1.05, -0.62, 0],
        ].map((position, index) => (
          <RoundedBox
            key={index}
            args={[0.45, 0.45, 0.32]}
            radius={0.08}
            smoothness={5}
            position={
              position as [number, number, number]
            }
          >
            <meshStandardMaterial
              color="#11171a"
              metalness={0.72}
              roughness={0.27}
            />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

/* ============================================================================
   OBJETO ATUAL
   ========================================================================== */

function ProjectObject({
  type,
}: {
  type: ProjectVisualType;
}) {
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
      return <CustomObject />;

    default:
      return <WebsiteObject />;
  }
}

/* ============================================================================
   SCENE
   ========================================================================== */

function Scene({
  type,
}: {
  type: ProjectVisualType;
}) {
  return (
    <>
      <ambientLight intensity={0.65} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.75}
      />

      <directionalLight
        position={[-4, 2, 2]}
        intensity={0.45}
      />

      <pointLight
        position={[-3, 1, 4]}
        intensity={1.9}
        distance={8}
        color="#c8ff38"
      />

      <pointLight
        position={[3, -2, 3]}
        intensity={0.65}
        distance={7}
      />

      <Sparkles
        count={24}
        scale={[6, 4, 4]}
        size={1}
        speed={0.12}
        opacity={0.16}
        color="#c8ff38"
      />

      {/* Corte seco:
          o React desmonta o modelo antigo e monta o novo imediatamente. */}
      <ProjectObject type={type} />

      <gridHelper
        args={[
          8,
          16,
          "#1c2327",
          "#0e1214",
        ]}
        position={[0, -1.72, 0]}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.16}
        minPolarAngle={Math.PI * 0.38}
        maxPolarAngle={Math.PI * 0.62}
      />
    </>
  );
}

/* ============================================================================
   MAIN
   ========================================================================== */

export function ProjectPreview3D({
  type,
}: {
  type: ProjectVisualType;
}) {
  const environment = ENVIRONMENTS[type];

  return (
    <div className="project-preview-shell">
      <div className="project-preview-grid" />
      <div className="project-preview-vignette" />

      <div className="project-preview-header">
        <div className="project-preview-code">
          {environment.code}
        </div>

        <div className="project-preview-status">
          <span className="project-preview-status-dot" />
          {environment.status}
        </div>
      </div>

      <div className="project-preview-title">
        <span>ARC / PROJECT VISUALIZER</span>
        <strong>{environment.title}</strong>
      </div>

      <div className="project-preview-corners">
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </div>

      <div className="project-preview-side-label left">
        SYSTEM / 03
      </div>

      <div className="project-preview-side-label right">
        LIVE PREVIEW
      </div>

      <div className="project-preview-canvas">
        <Canvas
          dpr={[1, 1.35]}
          camera={{
            position: [0, 0.1, 7],
            fov: 38,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Scene type={type} />
        </Canvas>
      </div>

      <div className="project-preview-bottom">
        <div className="project-preview-metrics">
          {environment.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>

        <div className="project-preview-engine">
          <span className="engine-line" />
          REAL-TIME 3D
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview3D;