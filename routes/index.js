const express = require('express')
const router = express.Router()
const solid = require('solid-auth-cli').solid
const auth = require('solid-auth-cli').auth


// Render Admin Welcome Page
router.get('/', (req, res) => {
    res.render('welcome')
})

// Solid login handle
router.post('/login', (req, res, next) => {
    console.log('Logging in')
    // var idp ="https://solid.community"
    // var username = "ajaykumard"
    // var pass = "<password>"
    var cred = {
        idp: "https://solid.community",
        username: "ajaykumard",
        password: "<password>"
    }
    login({ idp:"https://solid.community", username:"ajaykumard", password:"<password>" }).then(session => {
        console.log(`Logged in as ${session.webId}`)
        
    }, e => console.log("Error logging in: "+e))

    async function login() {
        var session = await solid.auth.currentSession()
        if(!session) session = await solid.auth.login(idp)
        return session;
     }
})


module.exports = router
