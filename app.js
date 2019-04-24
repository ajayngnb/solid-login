const express = require('express')
const expressLayout = require('express-ejs-layouts')


const PORT = process.env.PORT || 3000 
const app = express()


// EJS
app.use(expressLayout)
app.set('view engine', 'ejs')

// Bodyparser
app.use(express.urlencoded({ extended: false }))


// Routes
app.use('/', require('./routes/index'))


// Start Express Server
app.listen(PORT, () => {
    console.log(`Application running on https://localhost:${PORT}`)
})
