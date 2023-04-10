import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import React from 'react'
import Pc from './Pc'
const ScifiLaptop = () => {
  return (
    <div className="h-[100vh] w-[50%]">
      <Canvas>
        <OrbitControls scale={0.5} autoRotate={true}/>
        <ambientLight intensity={2}/>
        <Pc/>
      </Canvas>
    </div>
  )
}

export default ScifiLaptop
