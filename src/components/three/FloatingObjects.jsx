import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingSphere({ position, color, size, speed, wireframe = false }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} castShadow>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          metalness={wireframe ? 0 : 0.8}
          roughness={wireframe ? 0 : 0.2}
          emissive={color}
          emissiveIntensity={wireframe ? 0.3 : 0.1}
          transparent
          opacity={wireframe ? 0.4 : 0.9}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.5 * speed;
      meshRef.current.rotation.y = t * 0.3 * speed;
      meshRef.current.rotation.z = t * 0.2 * speed;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.4, 0.06, 16, 64]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({ position, color, size, speed }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.4 * speed;
      meshRef.current.rotation.y = t * 0.6 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.5}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects({ mouseX = 0, mouseY = 0 }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouseX * 0.001 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouseY * 0.001 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={3} />
      <pointLight position={[-5, -3, -5]} color="#7b2fff" intensity={2} />
      <pointLight position={[0, 5, -5]} color="#00fff2" intensity={1.5} />

      {/* Main spheres */}
      <FloatingSphere position={[-3, 1, -2]} color="#00d4ff" size={0.35} speed={1.2} />
      <FloatingSphere position={[3.5, -0.5, -3]} color="#7b2fff" size={0.45} speed={0.8} />
      <FloatingSphere position={[2, 2, -1]} color="#00fff2" size={0.2} speed={1.5} />
      <FloatingSphere position={[-2.5, -1.5, -1]} color="#ff6b35" size={0.25} speed={1.0} />

      {/* Wireframe spheres */}
      <FloatingSphere position={[0, 2.5, -3]} color="#00d4ff" size={0.6} speed={0.6} wireframe />
      <FloatingSphere position={[-4, 0, -4]} color="#7b2fff" size={0.8} speed={0.4} wireframe />

      {/* Torus rings */}
      <FloatingTorus position={[1.5, 1.5, -2]} color="#00d4ff" speed={1.0} />
      <FloatingTorus position={[-1.5, -1, -2.5]} color="#7b2fff" speed={0.7} />

      {/* Octahedra */}
      <FloatingOctahedron position={[4, 1, -3]} color="#00fff2" size={0.3} speed={0.9} />
      <FloatingOctahedron position={[-3.5, 2, -2]} color="#ff6b35" size={0.25} speed={1.1} />
    </group>
  );
}
