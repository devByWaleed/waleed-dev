"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function WireframeShape({
    mouse,
    reduceMotion,
    color,
}: {
    mouse: React.MutableRefObject<{ x: number; y: number }>;
    reduceMotion: React.MutableRefObject<boolean>;
    color: string;
}) {
    const meshRef = useRef<Mesh>(null);

    useFrame((_, delta) => {
        const mesh = meshRef.current;
        if (!mesh || reduceMotion.current) return;

        mesh.rotation.y += delta * 0.15;
        mesh.rotation.x += (mouse.current.y * 0.3 - mesh.rotation.x) * 0.05;
        mesh.rotation.z += (mouse.current.x * 0.15 - mesh.rotation.z) * 0.05;
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.6, 0]} />
            <meshBasicMaterial color={color} wireframe />
        </mesh>
    );
}

function getAccentColor() {
    const probe = document.createElement("div");
    probe.style.color = "var(--color-accent)";
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    document.body.removeChild(probe);
    return resolved;
}

export default function Scene() {
    const mouse = useRef({ x: 0, y: 0 });
    const reduceMotion = useRef(false);
    const [accentColor, setAccentColor] = useState("#28bcf6");

    useEffect(() => {
        setAccentColor(getAccentColor());
    }, []);

    useEffect(() => {
        reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const handleMove = (event: MouseEvent) => {
            mouse.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            };
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
            <WireframeShape mouse={mouse} reduceMotion={reduceMotion} color={accentColor} />
        </Canvas>
    );
}