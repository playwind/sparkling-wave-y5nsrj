import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Rock = () => {
  const obj = useLoader(OBJLoader, "/rock.obj");
  const texture = useTexture("/guide.png");
  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <mesh geometry={geometry} scale={0.04}>
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Rock;
