const allowList = ['http://localhost:3000', 'http://google.com'];

const corsOptions = {
   origin: function (origin, callback) {
      if (allowList.indexOf(origin) !== -1 || !origin) {
         callback(null, true);
      }
      else {
         callback(new Error('Not allowed by CORS'));
      }
   },
   optionsSuccessStatus: 200,
}


// const corsOptionsDelegate = function(req,callback) {
//     let corsOptions;
//     if(allowList.indexOf(req.header('Origin')) !== -1){
//         corsOptions = true
//     }
//     else {
//         corsOptions = false;
//     }
//     callback(null,corsOptions);
// }

module.exports = corsOptions;

