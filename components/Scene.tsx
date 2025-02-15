'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Particles } from './Particles'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: 'absolute' }}
    >
      <color attach="background" args={['#0A1929']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Particles />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
} 