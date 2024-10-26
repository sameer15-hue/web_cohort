function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData()
    .then(console.log('hi'))
    .catch((error) => {
        console.error(error);
    });