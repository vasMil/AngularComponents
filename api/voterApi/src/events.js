import { Router } from 'express';

export default function createRouter(db) {
    const router = Router();

    // Routes will be defined here
    router.get('/votes', (req, res) => {
        db.query(
            "SELECT icon, num_of_votes FROM votes;",
        (error, results) => {
            if (error) {
                console.log("error");
                res.status(500).json({status: 'error'});
            }
            else {
                console.log(results);
                res.status(200).json(results);
            }
        });
    })

    router.put('/votes', (req, res)=> {
        const icon = req.body.icon;
        db.query(
            `UPDATE votes SET num_of_votes = num_of_votes + 1 WHERE icon="${icon}";`,
            (error, results) => {
                if(error) {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else {
                    console.log(results);
                    res.status(200).json(results);
                }
            }
        )
    })
    return router;
}