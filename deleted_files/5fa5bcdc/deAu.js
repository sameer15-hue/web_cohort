import express from 'express';  // Only import express, no need for { json }
const app = express();

// Correct usage of express.json() middleware
app.use(express.json());

// Sample data, currently not used
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// Sample GET route
app.get("/", function (req, res) {
    res.send('jhi');
});

// Start the server on port 3000
app.listen(4000, () => {
    console.log('Server is running on http://localhost:3000');
});
