const express = require('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser');
const githubTrends = require('github-trends-api')
require('dotenv/config')

const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

const options = {
    section: '', // default: empty (repositories) - or 'developers'
    language: '', // default: empty (all) - or 'javascript', 'java' etc..
    since: '', // default: empty (daily) - or 'weekly', 'monthly'
    spoken_language_code: '' // default: empty (all) - or en - fs - zh ...
}

githubTrends(options, Object);
Promise;

app.post(':endpoint([\\/\\w\\.-]*)', (req, res) => {
    console.log(req.body);
    githubTrends({ language: `${req.body.lang}`, since: `${req.body.since}` })
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.json(error);
        });
})

app.listen(port, () => console.log(`Listening on port ${port}`))