module.exports = {

    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password} = req.body;
        dbInstance.create_user([username, password])
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })

    },

    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password} = req.body;
        dbInstance.login_user([username, password])
        .then((response) => {
            if(response[0]){
                res.status(200).send(response[0])
            } else {
                res.status(401).send('incorrect credentials')
            }
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    }
    




}