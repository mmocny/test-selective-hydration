'use client';

import delay from "@/utils/delay";
import TrackingPromise from "@/utils/TrackingPromise";
import { Suspense, use, useState, useTransition } from "react";

const map = new Map<number, Promise<void>>();

async function getIsReady(num:number) {
	if (typeof navigator === 'undefined') return;

	// console.log('mounting', num);
	await delay(num * 100);

	let el = document.getElementById(num.toString());
	if (!el) return;
	
	el.style.backgroundColor = 'green';
}

function cachedIsReady(num:number) {
	if (!map.has(num)) 
		map.set(num, getIsReady(num));
	return map.get(num)!;
}

export default function ClientComponent({ num }: { num: number }) {
	const styles = {
		margin: '5px',
		padding: '5px'
	};

	const ready = use(cachedIsReady(num));

	const handler = (event: any) => {
		console.log('clicked', num);
		event.target.style.backgroundColor = 'red';
	}

	// console.log('rendering', num);
	return <input id={num.toString()} type="button" onClick={handler} value={`Click Me ${num}`} style={styles}></input>;


}