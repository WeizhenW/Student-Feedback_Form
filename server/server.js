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
//get route to retrieve information from database
app.get('/feedback', (req, res) => {
    pool.query(`
    SELECT * FROM "feedback" ORDER BY "id" DESC;
    `).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get route', error);
        }
    )
})
//post route to add new feedback to database
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
//delete route to delete one feedback
app.delete('/feedback/:id', (req, res) => {
    const idToDelete = req.params.id;
    pool.query(`
        DELETE FROM "feedback" WHERE "id"=$1
    `, [idToDelete]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with delete route', error);
        }
    )
})

//put route to update the flag
app.put('/admin', (req, res) => {
    pool.query(`
    UPDATE "feedback" SET "flagged" = $1 WHERE "id"=$2;`,
    [req.body.flagged, req.body.id]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with put route', error);
        }
    )
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});