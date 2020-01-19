module.exports = {
    async consultarAll(app){
       return app.models.users.users.findAll({
           association: [app.models.noticias.noticias]
       })
    },

    async insert(app, user){
        return app.models.users.users.create(user)
    },

    async delete(app, req){
        return app.models.users.users.destroy({
            where: {
                id: req.id
            }
        })
    },

    async update(app, users){
        return app.models.users.users.update(users.update, {
            where: {
                id: users.id
            }
        })
    }
}