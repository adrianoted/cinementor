const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3280
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const helmet = require('helmet')

app.prepare().then(() => {
    const server = express()
   
    server.use(helmet());

    // don't show detail page template
    server.get('/detail', (req, res) => res.redirect('back'));

    server.get('/detail/:cat/:id/:title', (req, res) => {
        const objParams = {...req.params};
        return app.render(req, res, '/detail', objParams)
    });

    server.get('/', (req, res) => app.render(req, res, '/index'))

    /* default route - allows Next to handle all other routes */
    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})