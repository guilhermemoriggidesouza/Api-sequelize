module.exports = {
    async get(req, res, app){
        var users = await app.DAO.usersDAO.consultarAll(app)
        res.send(users)
    },
    async post(req, res, app){
        var insertData = await app.DAO.usersDAO.insert(app, req.body)
        res.send(insertData)
    },
    async delete(req, res, app){
        var deletedData = await app.DAO.usersDAO.delete(app, req.body)
        res.send(`deleted ${deletedData} rows`)
    },
    async put(req, res, app){
        var updatedData = await app.DAO.usersDAO.update(app, req.body)
        res.send(`updated ${updatedData} rows`)
    }
}