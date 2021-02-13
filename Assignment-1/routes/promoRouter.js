const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

/*-------------------------------------------------------------------------------------------------------------*/

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you');
})
.post((req,res,next) => {
    res.end('Will add the promotion : '+req.body.name + ' with details : '+req.body.description); 
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT Operation is not Supported on /promotions'); 
})
.delete((req,res,next) => {
    res.end('Deleting all the promotions to you');
});

/*-------------------------------------------------------------------------------------------------------------*/

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the promotion '+req.params.promoId+ ' to you');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST Operation is not Supported on /promotions/'+req.params.promoId); 
})
.put((req,res,next) => {
    res.write('Updating the promotion : '+req.params.promoId+"\n");
    res.end('Will Update the promotions : '+req.body.name+' with details : '+req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting promotion : '+req.params.promoId);
});

/*-------------------------------------------------------------------------------------------------------------*/

module.exports = promoRouter;