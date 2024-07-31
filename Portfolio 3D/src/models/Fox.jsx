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

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/fox.glb";

// 3D Model: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function Fox({ currentAnimation, ...props }) {
    // Referência para o grupo que contém o modelo 3D e suas animações
    const group = useRef();

    // Carrega os nós, materiais e animações do arquivo GLTF fornecido
    const { nodes, materials, animations } = useGLTF(scene);

    // Obtém acesso às animações do grupo
    const { actions } = useAnimations(animations, group);

    // Este efeito será executado sempre que a propriedade currentAnimation mudar
    useEffect(() => {
        // Para todas as animações, interrompe qualquer ação atualmente em execução
        Object.values(actions).forEach((action) => action.stop());

        // Se houver uma ação com o nome especificado em currentAnimation, a reproduz
        if (actions[currentAnimation]) {
            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);  // Este efeito será acionado sempre que actions ou currentAnimation mudarem

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    name='Object_8'
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    name='Object_9'
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    name='Object_10'
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_11.skeleton}
                />
            </group>
        </group>
    );
}

useGLTF.preload(scene);