const express = require('express'); const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (request, response) => response.sendFile(`${__dirname/index.html`));

app.post('/process', (request, response) => { 
    const postBody = request.body;
    console.log(postBody);
    response.sendFile(`${__dirname}/success.html`); });

app.listen(3000, () => console.info('Application running on port 3000'));