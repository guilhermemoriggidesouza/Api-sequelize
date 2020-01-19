module.exports = function(app){
    app.get('/', (req, res)=>{
        app.controller.home.get(req, res, app)
    })

    app.post('/usuarios', (req, res)=>{
        app.controller.users.post(req, res, app)
    })

    app.post('/noticias', (req, res)=>{
        app.controller.noticias.post(req, res, app)
    })

    app.get('/usuarios', (req, res)=>{
        app.controller.users.get(req, res, app)
    })

    app.get('/noticias', (req, res)=>{
        app.controller.noticias.get(req, res, app)
    })
    
    app.delete('/usuarios', (req, res)=>{
        app.controller.users.delete(req, res, app)
    })

    app.delete('/noticias', (req, res)=>{
        app.controller.noticias.delete(req, res, app)
    })

    app.put('/noticias', (req, res)=>{
        app.controller.noticias.put(req, res, app)
    })

    app.put('/usuarios', (req, res)=>{
        app.controller.users.put(req, res, app)
    })
}