export default function busy(ms: number) {
	const target = performance.now() + ms;
	while (performance.now() < target);
}