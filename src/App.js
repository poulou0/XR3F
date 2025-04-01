import {createXRStore, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import Video from "./components/Video";
import Gltf from "./components/Gltf";


const store = createXRStore()

function App() {
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <spotLight position={[0, 10, 20]} angle={0.45} penumbra={1} decay={0.2} intensity={Math.PI}/>
          <Video src="/assets/sample.mp4"/>
          <Gltf src="/assets/esg-logo.glb"/>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
