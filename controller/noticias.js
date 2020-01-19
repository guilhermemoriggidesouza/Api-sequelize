module.exports = {
    async get(req, res, app){
        var noticias = await app.DAO.noticiasDAO.consultarAll(app)
        res.send(noticias)
    },

    async post(req, res, app){
        var insertData = await app.DAO.noticiasDAO.insert(app, req.body)
        res.send(insertData)
    },

    async delete(req, res, app){
        var deletedData = await app.DAO.noticiasDAO.delete(app, req.body)
        res.send(`deleted ${deletedData} rows`)
    },

    async put(req, res, app){
        var updatedData = await app.DAO.noticiasDAO.update(app, req.body)
        res.send(`updated ${updatedData} rows`)
    }
}