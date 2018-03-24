exports.applySession = (req, res, next) => {
  console.log('MIDDLEWARE req.session', req.session);
  next();
}




// const serviceMap = require('./serviceMap');

// exports.parseAgent = (req, res, next) => {
//   const {agent} = req.params;
//   const connector = agent.replace(/\d/g, '');
//   const port = serviceMap.ports[connector];
//   if (port) {
//     req.connector = connector;
//     req.port = port;
//     next();
//   } 
//   else {
//     res.status(422);
//     res.json({ok: false, message: 'No connector service found'});
//   }
// }

// exports.logRequest = (req, res, next) => {
//   console.log(`${(new Date()).toString()}: ${req.method} ${req.originalUrl} from ${req.ip}`)
//   return next()
// }