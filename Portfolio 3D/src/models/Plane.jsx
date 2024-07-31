import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

// 3D Model: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  // Referência para o objeto do avião
  const ref = useRef();

  // Carregar o modelo 3D e suas animações
  const { scene, animations } = useGLTF(planeScene);

  // Obter as ações de animação associadas ao avião
  const { actions } = useAnimations(animations, ref);

  // Usar um efeito para controlar a animação do avião com base em 'isRotating'
  // Nota: Os nomes das animações podem ser encontrados no site Sketchfab onde o modelo 3D está hospedado.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      {/* use o elemento primitivo quando quiser incorporar diretamente um 3D complexo modelo ou cena  */}
      <primitive object={scene} />
    </mesh>
  );
}