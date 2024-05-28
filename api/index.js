const express = require('express');
const cors = require('cors');

const app = express();

PORT = 3000


app.use(cors());
app.use(express.json());


app.get('/', async(req, res) => {
    res.json({message: 'Working'}).status(200);
})


app.get('/check', async (req, res) => {
    const atlassian_id = "lagay mo ung id mo rito dapat no quotation marks"; 
    const url = `https://tutorialsdojo.atlassian.net/wiki/api/v2/pages/${atlassian_id}?body-format=atlas_doc_format`;
    const username = 'lagay mo email';
    const password = 'lagay mo password';
    const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization' : `Basic ${base64Credentials}`
            }
        });

        const data = await response.json();
        console.log(data);
        return res.json(data).status(200);
    }
    catch (err) {
        console.log(err);
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})