import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// 3D Model: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
    // Referência para o objeto do pássaro (para acessar e modificar sua posição e rotação)
    const birdRef = useRef();

    // Carrega o modelo 3D e as animações do arquivo GLTF fornecido
    const { scene, animations } = useGLTF(birdScene);

    // Obtém acesso às animações para o pássaro
    const { actions } = useAnimations(animations, birdRef);

    // Toca a animação "Take 001" quando o componente é montado
    // Observação: Os nomes das animações podem ser encontrados no site Sketchfab onde o modelo 3D está hospedado.
    useEffect(() => {
        actions["Take 001"].play();
    }, []);

    useFrame(({ clock, camera }) => {
        // Atualiza a posição Y para simular o movimento do pássaro usando uma onda senoidal
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Verifica se o pássaro atingiu um determinado ponto final em relação à câmera
        if (birdRef.current.position.x > camera.position.x + 10) {
            // Muda a direção para trás e rotaciona o pássaro 180 graus no eixo Y
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            // Muda a direção para frente e redefine a rotação do pássaro
            birdRef.current.rotation.y = 0;
        }

        // Atualiza as posições X e Z com base na direção
        if (birdRef.current.rotation.y === 0) {
            // Movendo para frente
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // Movendo para trás
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        // Para criar e exibir objetos 3D
        <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            {/* use o elemento primitivo quando quiser incorporar diretamente um 3D complexo modelo ou cena  */}
            <primitive object={scene} />
        </mesh>
    );
}