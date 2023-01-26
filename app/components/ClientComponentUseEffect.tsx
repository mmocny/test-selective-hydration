'use client';

import delay from "@/utils/delay";
import { useEffect, useState } from "react";

const map = new Map<number, Promise<void>>();

async function getIsReady(num:number) {
	if (typeof navigator === 'undefined') return;

	// console.log('mounting', num);
	await delay(num * 100);

	let el = document.getElementById(num.toString());
	if (!el) return;
	
	el.style.backgroundColor = 'green';
}

export default function ClientComponent({ num }: { num: number }) {
	const styles = {
		margin: '5px',
		padding: '5px'
	};

	const [ready, setReady] = useState(false);

	useEffect(() => {
		console.log('useEffect', num);
		// IIFE since useEffect wont accept an async
		(async() => {
			await getIsReady(num);
			setReady(true);
		})();
	}, [num]);

	const handler = (event: any) => {
		console.log('clicked', num);
		event.target.style.backgroundColor = 'red';
	}

	if (!ready) 
		return "Loading...";

	return <input id={num.toString()} type="button" onClick={handler} value={`Click Me ${num}`} style={styles}></input>;


}