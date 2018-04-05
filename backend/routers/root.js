'use strict';

const rootRouter = require('express').Router();
const apiRouter = require('./api');
const isLoggedIn = require('../helpers/isLoggedIn')
const {sendIndexHtml}= require('../controllers/react')
rootRouter.use('/api', apiRouter);

 rootRouter.get('/test', function(req,res) {
     debugger;
 })

rootRouter.get(['/','/login','/register'], sendIndexHtml);

rootRouter.get('/*',isLoggedIn,sendIndexHtml );

module.exports = rootRouter;