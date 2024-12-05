const express = require("express")
const router = express.Router();
const os = require("os");

router.get("/info", (req, res)=>{
    let sysObj = {
        platform: os.platform(),
        architecture: os.arch(),
        freemem: Math.floor(os.freemem()/Math.pow(1024, 3)),
        totalmem: Math.floor(os.totalmem()/Math.pow(1024,3)),
        processor: os.cpus()[0]
    }
    res.json(sysObj)
})


module.exports = router;