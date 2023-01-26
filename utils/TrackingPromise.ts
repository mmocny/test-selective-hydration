export default function TrackingPromise(promise: Promise<any>) {
    const ret = { pending: true }; // TODO: track resolve/reject?
	promise.then(value => {
		ret.pending = false;
		return value;
	}, error => {
		ret.pending = faslse;
		throw error;
	});
    return ret;
}
