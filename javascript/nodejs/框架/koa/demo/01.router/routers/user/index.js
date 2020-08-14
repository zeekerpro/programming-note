const Router = require('koa-router');

let userRouter = new Router();

userRouter.use('/admin', require('./admin'));
userRouter.use('/company', require('./company'));

module.exports = userRouter.routes();
