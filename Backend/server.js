    const fs = require('fs');
    const express = require('express');
    const cors = require('cors'); 

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware to parse JSON request bodies
    app.use(express.json());
    app.use(cors({
      origin: 'http://localhost:4200'
    }));
       
    app.get('/', (req, res) => {
      res.send('Hello World from your Node.js server!'); 
    });


    app.get('/api/data', (req, res) => {
        const filePath = './data/output.czml'; 
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let storedArray = "";
        storedArray = fileContent;
        console.log(storedArray);
        data =JSON.stringify({ message: 'Data received successfully', data: storedArray });
        res.send(data.trim());        

    });
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });