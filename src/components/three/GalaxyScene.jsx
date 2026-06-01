import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Calculate galaxy coordinates once at module load to ensure component purity and avoid render-time Math.random calls
const [positions, colors] = (() => {
  const count = 8000;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);

  const colorInner = new THREE.Color("#00d4ff");
  const colorOuter = new THREE.Color("#7b2fff");
  const colorMid   = new THREE.Color("#00fff2");

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 8 + 1;
    const spinAngle = radius * 3;
    const branchAngle = ((i % 3) / 3) * Math.PI * 2;

    const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.6;
    const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.6;
    const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.6;

    pos[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX;
    pos[i3 + 1] = randomY * 0.5;
    pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    const mixedColor = colorInner.clone();
    const t = radius / 9;
    if (t < 0.5) {
      mixedColor.lerp(colorMid, t * 2);
    } else {
      mixedColor.lerp(colorOuter, (t - 0.5) * 2);
    }

    col[i3]     = mixedColor.r;
    col[i3 + 1] = mixedColor.g;
    col[i3 + 2] = mixedColor.b;
  }

  return [pos, col];
})();

const [innerPositions] = (() => {
  const count = 2000;
  const pos = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    pos[i3]     = (Math.random() - 0.5) * 3;
    pos[i3 + 1] = (Math.random() - 0.5) * 1;
    pos[i3 + 2] = (Math.random() - 0.5) * 3;
  }

  return [pos];
})();

export default function GalaxyScene() {
  const points = useRef();
  const innerPoints = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (points.current) {
      points.current.rotation.y = t * 0.04;
      points.current.rotation.x = Math.sin(t * 0.01) * 0.1;
    }
    if (innerPoints.current) {
      innerPoints.current.rotation.y = -t * 0.06;
    }
  });

  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.018}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={innerPoints}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={innerPositions.length / 3} array={innerPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.012}
          sizeAttenuation
          color="#00d4ff"
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
