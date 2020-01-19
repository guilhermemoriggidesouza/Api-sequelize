module.exports = {
    async get(req, res, app){
        var noticias = await app.DAO.noticiasDAO.consultarAllUsersTo(app)
        res.send(noticias)
    }
}