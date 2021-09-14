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

    router.put('/votes/:icon/:new_val', (req, res)=> {
        const icon = req.params.icon.toString();
        const new_val = parseInt(req.params.new_val);
        db.query(
            `UPDATE votes SET num_of_votes = ${new_val} WHERE icon="${icon}";`,
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