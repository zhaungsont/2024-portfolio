'use client';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotateMesh() {
	const meshRef = useRef<THREE.Mesh>(null!);

	useFrame(({ pointer }) => {
		const { x, y } = pointer;
		meshRef.current.rotation.x = y * Math.PI * 2;
		meshRef.current.rotation.y = x * Math.PI * 2;
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="royalblue" />
		</mesh>
	);
}

export default function ThreeCanvas() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<RotateMesh />
		</Canvas>
	);
}
