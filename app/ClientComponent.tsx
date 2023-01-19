'use client';

import busy from "@/utils/busy";
import { useEffect } from "react";

export default function ClientComponent({ num }: { num: number}) {
	const styles = {
		margin: '5px',
		padding: '5px'
	};

	if (typeof navigator !== 'undefined') {
		console.log('mounting', num);
		busy(100);
		let el = document.getElementById(num.toString());
		if (el) el.style.backgroundColor = 'green';
	}
	
	const handler = (event: any) => {
		console.log('clicked', num);
		event.target.style.backgroundColor = 'red';
	}

	return <input id={ num.toString() } type="button" onClick={handler} value={`Click Me ${num}`} style={styles}></input>;
}