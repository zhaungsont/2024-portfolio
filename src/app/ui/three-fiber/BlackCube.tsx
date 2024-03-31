'use client';

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
// import { Box } from '@react-three/drei';
import styles from './BlackCube.module.scss';

function SpinningBox() {
	const meshRef = useRef<THREE.Mesh>(null);
	const { size } = useThree();
	const scale = Math.min(size.width, size.height) / 2;
	console.log('scale:', scale);

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh ref={meshRef} scale={[5, 5, 5]}>
			<boxGeometry args={[1, 1, 1]} />
			<meshBasicMaterial color="black" />
		</mesh>
	);
}

export default function Three() {
	return (
		<div className={styles.canvas}>
			<Canvas>
				<SpinningBox />
			</Canvas>
		</div>
	);
}
