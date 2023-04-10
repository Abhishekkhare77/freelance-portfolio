import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import React from 'react'
import Pc from './Pc'
const ScifiLaptop = () => {
  return (
    <div className="md:h-[100vh] md:w-[50%] h-[50vh] w-[100%]">
      <Canvas camera={{ position: [5, 2, -5], fov: 100 }}>
        <OrbitControls autoRotate={true}/>
        <ambientLight intensity={2}/>
        <Pc/>
      </Canvas>
    </div>
  )
}

export default ScifiLaptop
