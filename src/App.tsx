import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Rock from "./components/Rock";
import { Suspense } from "react";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls position={[5, 1, 5]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
        <Suspense fallback={null}>
          <Rock />
        </Suspense>
      </Canvas>
    </div>
  );
}
