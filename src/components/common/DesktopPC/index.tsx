import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ArcballControls, Center, OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

const DesktopPC = () => {
  const standingDesk = useGLTF('/laptop/scene.gltf')
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = 0.05 // Circular motion in X
    }
  })


  return (
    <>
      <mesh ref={meshRef} castShadow  >
        <hemisphereLight intensity={0.20} groundColor={"black"} />
        <pointLight intensity={40} position={1.50} />
        <directionalLight position={[0, 5, -5]} intensity={1.0}/>
        <primitive position={[1.00, -1.30, 2]} rotation={[0.30, -3.30, -0.200]} object={standingDesk.scene} scale={3.0} />
      </mesh>
    </>
  )
}

const DesktopPCCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows={true}
      camera={{ position: [4, 2, 10], fov: 18 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<>Loading</>}>
        <OrbitControls autoRotateSpeed={6} enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <DesktopPC />
        <ambientLight intensity={0.5} />

        {/* Directional light to cast shadows on both meshes */}
      </Suspense>


      <Preload all />
    </Canvas>
  )
}

export default DesktopPCCanvas