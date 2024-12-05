const express = require("express")
const router = express.Router();
const os = require("os");
var os_utils = require('os-utils');
let diskspace = require("diskspace");

router.get("/info", (req, res)=>{
    let sysObj = {
        platform: os.platform(),
        architecture: os.arch(),
        freemem: os.freemem()/Math.pow(1024, 3),
        totalmem: os.totalmem()/Math.pow(1024,3),
        processor: {model: os.cpus()[0].model.trim(),
            cores:  os_utils.cpuCount()
        },
        diskspace: diskspace.check('C', (err, res)=>{return res})
    }
    res.json(sysObj)
})


module.exports = router;