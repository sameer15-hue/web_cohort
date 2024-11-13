function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
	console.log('sam');
}

solve();
//basically we cant make setTimeout synchronous ,we just write await part as assuming that seTimeout in promise is sync .
// but its also async only.

