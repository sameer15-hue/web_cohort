function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function solve() {
      setTimeoutPromisified(1000);
      console.log("hi");
       setTimeoutPromisified(3000);
      console.log("hello");
       setTimeoutPromisified(5000);
      console.log("hi there");
  }
  
  solve();