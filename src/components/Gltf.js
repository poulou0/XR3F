import {Gltf as GltfDrei} from "@react-three/drei";
import {Handle, HandleTarget} from "@react-three/handle";

function Gltf({src}) {
  return (
    <HandleTarget>
      <Handle targetRef="from-context">
        <GltfDrei src={src} position={[0, 0.5, -2]} scale={[0.05, 0.05, 0.05]}/>
      </Handle>
    </HandleTarget>
  )
}

export default Gltf;
