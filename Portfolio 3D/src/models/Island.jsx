/*
* IMPORTANTE: Carregar modelos glTF em uma cena Three.js dá muito trabalho.
* Antes de podermos configurar ou animar as malhas do nosso modelo, precisamos iterar
* cada parte das malhas do nosso modelo e salve-as separadamente.
*
* Mas felizmente existe um aplicativo que transforma arquivos gltf ou glb em componentes jsx
* Para este modelo, visite https://gltf.pmnd.rs/
* E obtenha o código. E então adicione o resto das coisas.
* VOCÊ NÃO PRECISA ESCREVER TUDO DO RISCO
*/

import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export function Island({
    isRotating,
    setIsRotating,
    setCurrentStage,
    currentFocusPoint,
    ...props
}) {
    // Referência para o objeto da ilha 3D
    const islandRef = useRef();

    // Obter acesso ao renderizador e à viewport do Three.js
    const { gl, viewport } = useThree();

    // Carregar os nós e materiais do arquivo GLTF da ilha
    const { nodes, materials } = useGLTF(islandScene);

    // Ref para a última posição do mouse x
    const lastX = useRef(0);

    // Ref para a velocidade de rotação
    const rotationSpeed = useRef(0);

    // Fator de amortecimento para controlar a amortecimento de rotação
    const dampingFactor = 0.95;

    // Lidar com o evento de pressionar o botão do mouse ou toque
    const handlePointerDown = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(true);

        // Calcule o clientX com base no fato de ser um evento de toque ou de mouse
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;

        // Armazene a posição atual do clientX para referência
        lastX.current = clientX;
    };

    // Lidar com o evento de soltar o botão do mouse ou toque
    const handlePointerUp = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(false);
    };

    // Lidar com o evento de mover o mouse ou toque
    const handlePointerMove = (event) => {
        event.stopPropagation();
        event.preventDefault();

        if (isRotating) {
            // Se a rotação estiver habilitada, calcule a mudança na posição do clientX
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;

            // Calcular a mudança na posição horizontal do cursor do mouse ou entrada por toque,
            // em relação à largura da janela de visualização
            const delta = (clientX - lastX.current) / viewport.width;

            // Atualize a rotação da ilha com base no movimento do mouse/toque
            islandRef.current.rotation.y += delta * 0.01 * Math.PI;

            // Atualize a referência para a última posição do clientX
            lastX.current = clientX;

            // Atualizar a velocidade de rotação
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    // Lidar com eventos de teclado
    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true);

            islandRef.current.rotation.y += 0.005 * Math.PI;
            rotationSpeed.current = 0.007;
        } else if (event.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);

            islandRef.current.rotation.y -= 0.005 * Math.PI;
            rotationSpeed.current = -0.007;
        }
    };

    // Lidar com eventos de teclado
    const handleKeyUp = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            setIsRotating(false);
        }
    };

    // Lidar com eventos de toque para dispositivos móveis
    const handleTouchStart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }

    const handleTouchEnd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    const handleTouchMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;

            islandRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    // Adicionar e remover ouvintes de eventos quando o componente montar e desmontar
    useEffect(() => {
        // Adicione ouvintes de eventos para eventos de ponteiro e teclado
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchend", handleTouchEnd);
        canvas.addEventListener("touchmove", handleTouchMove);

        // Remove ouvintes de eventos quando o componente para desmontado
        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchend", handleTouchEnd);
            canvas.removeEventListener("touchmove", handleTouchMove);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    // Esta função é chamada a cada atualização de quadro
    useFrame(() => {

        // Se não estiver girando, aplique amortecimento para desacelerar a rotação (suavemente)
        if (!isRotating) {
            // Aplicar fator de amortecimento
            rotationSpeed.current *= dampingFactor;

            // Pare a rotação quando a velocidade for muito pequena
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            // Ao girar, determine o estágio atual com base na orientação da ilha
            const rotation = islandRef.current.rotation.y;

            /*
                * Normalize o valor de rotação para garantir que ele permaneça dentro do intervalo [0, 2 * Math.PI].
                
                * O objetivo é garantir que o valor da rotação permaneça dentro de uma faixa específica para
                que evite possíveis problemas com valores de rotação muito grandes ou negativos.
                
                * Aqui está uma explicação passo a passo do que este código faz:
                * 1. rotação % (2 * Math.PI) calcula o restante do valor da rotação quando dividido por 2 * Math.PI. 
                Isso essencialmente envolve o valor da rotação quando atinge um círculo completo (360 graus) para que fique dentro do intervalo de 0 a 2 * Math.PI.

                * 2. (rotação% (2 * Math.PI)) + 2 * Math.PI adiciona 2 * Math.PI ao resultado da etapa 1.
                Isso é feito para garantir que o valor permaneça positivo e dentro da faixa de 0 a 2 * Math.PI mesmo que tenha sido negativo após a operação do módulo na etapa 1.

                * 3. Finalmente, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) aplica outra operação módulo para o valor obtido no passo 2. 
                Este passo garante que o valor sempre fica no intervalo de 0 a 2 * Math.PI, que equivale a um valor completo de círculo em radianos.
            */
            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Defina o cenário atual com base na orientação da ilha
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    });

    return (
        // {3D model: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
        <a.group ref={islandRef} {...props}>
            <mesh
                geometry={nodes.polySurface944_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface945_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface946_tree2_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface947_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface948_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface949_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.pCube11_rocks1_0.geometry}
                material={materials.PaletteMaterial001}
            />
        </a.group>
    );
}