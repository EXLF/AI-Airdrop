'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function Particles() {
  const points = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()
  
  // 创建粒子
  const particlesCount = 4000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    const radius = 10
    
    for (let i = 0; i < particlesCount; i++) {
      // 创建球形分布
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      
      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = radius * Math.cos(theta)
    }
    return positions
  }, [])

  // 创建粒子大小
  const sizes = useMemo(() => {
    const sizes = new Float32Array(particlesCount)
    for (let i = 0; i < particlesCount; i++) {
      sizes[i] = Math.random() * 0.03 + 0.01
    }
    return sizes
  }, [])

  // 创建粒子颜色
  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3)
    const color1 = new THREE.Color('#00F5FF')
    const color2 = new THREE.Color('#7B2FFE')
    
    for (let i = 0; i < particlesCount; i++) {
      const mixed = color1.clone().lerp(color2, Math.random())
      colors[i * 3] = mixed.r
      colors[i * 3 + 1] = mixed.g
      colors[i * 3 + 2] = mixed.b
    }
    return colors
  }, [])

  // 动画效果
  useFrame((state, delta) => {
    if (points.current) {
      // 旋转效果
      points.current.rotation.x += delta * 0.05
      points.current.rotation.y += delta * 0.03

      // 鼠标交互
      points.current.rotation.x += (mouse.y * viewport.width * 0.001 - points.current.rotation.x) * 0.05
      points.current.rotation.y += (mouse.x * viewport.height * 0.001 - points.current.rotation.y) * 0.05
      
      // 呼吸效果
      const positions = points.current.geometry.attributes.position.array as Float32Array
      const initialPositions = positions.slice()
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        positions[i3] = initialPositions[i3] + Math.sin(state.clock.elapsedTime + i) * 0.02
        positions[i3 + 1] = initialPositions[i3 + 1] + Math.cos(state.clock.elapsedTime + i) * 0.02
        positions[i3 + 2] = initialPositions[i3 + 2] + Math.sin(state.clock.elapsedTime + i) * 0.02
      }
      
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesCount}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
} 