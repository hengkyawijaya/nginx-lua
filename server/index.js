const express = require('express')
const yaml = require('js-yaml');
const fs = require('fs') 

const app = express()
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/ip/:ip', function(req, res) {
    const configFile = fs.readFileSync(`config.yaml`, 'utf8')
    const config = yaml.load(configFile)
    const ipallow = config.IP_WHITELIST.includes(req.params.ip)
    if (!ipallow) {
        res.send('DENY')
    }
    res.send('ALLOW')
})

app.get('/api/ips', function(req, res) {
    const configFile = fs.readFileSync(`config.yaml`, 'utf8')
    const config = yaml.load(configFile)
    res.send(config.IP_WHITELIST.join())
})

app.listen(8000, () => {
    console.log("listen port ", 8000)
})