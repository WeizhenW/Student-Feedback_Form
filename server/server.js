const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/feedback', (req, res) => {
    pool.query(`
    SELECT * FROM "feedback";
    `).then(
        result => {
            console.log(result);
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get route', error);
        }
    )
})
app.post('/submit', (req, res)=> {
    const feedback = req.body;
    pool.query(`
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, 
    [feedback.feeling, feedback.understanding, feedback.support, feedback.comment]
    ).then(
        () => res.sendStatus(201)
        
    ).catch(
        error => {
            console.log('error with post route', error);
        }
    )
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});