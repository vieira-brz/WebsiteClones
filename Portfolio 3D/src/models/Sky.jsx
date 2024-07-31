import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

// 3D Model: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky({ isRotating }) {
  // Carregar o modelo 3D do céu
  const sky = useGLTF(skyScene);

  // Referência para o objeto do céu
  const skyRef = useRef();

  // Nota: Os nomes das animações podem ser encontrados no site Sketchfab onde o modelo 3D está hospedado.
  // Isso garante animações suaves tornando a rotação independente da taxa de quadros.
  // 'delta' representa o tempo em segundos desde o último quadro.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Ajuste a velocidade de rotação conforme necessário
    }
  });

  return (
    <mesh ref={skyRef}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={sky.scene} />
    </mesh>
  );
}