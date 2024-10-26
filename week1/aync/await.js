function setTimeoutPromisified(ms) {
	;
  return new Promise(resolve => setTimeout(resolve, ms));
}
function greet(){
	console.log("sameer");
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