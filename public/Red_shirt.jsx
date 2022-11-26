/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function RedShirt(props) {
  const { nodes, materials } = useGLTF('/red_shirt.glb')

  const model_ref = useRef();

  useFrame(() => {
    model_ref.current.rotation.y +=0.01;
  })
  return (
    <group ref={model_ref} {...props} dispose={null} scale={[15,15,15]}>
      <mesh geometry={nodes.Ribbing_Node.geometry} material={materials.Body_FRONT_2664} position={[0.01, -0.98, 0.01]} />
      <mesh geometry={nodes.Ribbing_Node001.geometry} material={materials.Body_FRONT_2664} position={[0.01, -0.98, 0.01]} />
      <mesh geometry={nodes.Body_Front_Node.geometry} material={materials.Body_FRONT_2664} position={[0.01, -0.98, 0.01]} />
      <mesh geometry={nodes.Body_Back_Node.geometry} material={materials.Body_FRONT_2664} position={[0.01, -0.98, 0.01]} />
      <mesh geometry={nodes.Sleeves_Node.geometry} material={materials.Sleeves_FRONT_2669} position={[0.01, -0.98, 0.01]} />
      <mesh geometry={nodes.Sleeves_Node001.geometry} material={materials.Sleeves_FRONT_2669} position={[0.01, -0.98, 0.01]} />
    </group>
  )
}

useGLTF.preload('/red_shirt.glb')
