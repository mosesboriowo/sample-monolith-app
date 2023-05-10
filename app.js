const express = require('express');
const app = express();
const port = 2525;

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <style>
            body {
              background-color: #f2f2f2;
              text-align: center;
              padding: 50px;
              font-family: Arial, sans-serif;
            }
            h1 {
              color: #ff00ff;
            }
            p {
                color: #dd92dd
            }
          </style>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <p>This was compiled by Moses Boriowo</p>
        </body>
      </html>
    `);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});