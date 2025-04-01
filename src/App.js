import {createXRStore, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import {Handle, HandleTarget} from "@react-three/handle";

const store = createXRStore()

function App() {
  const {scene} = useGLTF("/assets/esg-logo.glb")

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <spotLight position={[0, 10, 20]} angle={0.45} penumbra={1} decay={0.2} intensity={Math.PI}/>
          <HandleTarget>
            <Handle targetRef="from-context" translate="as-rotate"
                    rotate={{x: true, y: true, z: true}}>
              <primitive object={scene.clone()} position={[0, 0.5, -2]} scale={[0.05, 0.05, 0.05]}/>
            </Handle>
          </HandleTarget>
        </XR>
      </Canvas>
    </>
  )
}

export default App;
