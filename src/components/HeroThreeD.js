import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,RenderTexture ,PerspectiveCamera, Image} from '@react-three/drei';
import MyPic from '../assets/MyPic.jpg'
const HeroThreeD = () => {
  return (
    <div className='md:h-[100vh] h-[70vh] w-[90%] md:w-1/2 -z-10'>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate='true'/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[3,2,1]}/>
        <mesh>
          <boxGeometry args={[2.5,2.5,2.5]}/>
          <meshStandardMaterial >
            <RenderTexture attach={'map'}>
              <PerspectiveCamera makeDefault position={[0,0,2]}/>
              <Image url={MyPic} scale={3} transparent='true' />
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  )
}

export default HeroThreeD
