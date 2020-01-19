module.exports = {
    async consultarAllUsersTo(app){
       return app.models.noticias.noticias.findAll({
           include: [app.models.users.users]
       })
    },

    async consultarAll(app){
       return app.models.noticias.noticias.findAll()
    },

    async insert(app, noticia){
        return app.models.noticias.noticias.create(noticia)
    },
    
    async delete(app, noticia){
        return app.models.noticias.noticias.destroy({
            where: {
                id: noticia.id
            }
        })
    },

    async update(app, noticias){
        return app.models.noticias.noticias.update(noticias.update, {
            where: {
                id: noticias.id
            }
        })
    }
}