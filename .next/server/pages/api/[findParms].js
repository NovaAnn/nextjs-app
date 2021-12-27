"use strict";
(() => {
var exports = {};
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('REQUEST');
        console.log(req);
        const data = req.body;
        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.find(data).toArray();
        client.close();
        res.status(201).json({
            ...result,
            id: result._id.toString()
        });
    }
}
//   else 
//   {
//     console.log('inside api')
//   const client2 = await MongoClient.connect(
//     'mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority'
//   );
//   const db2 = client2.db();
//   const price1 = 60100;
//   const ar = [{$and :[{"$expr" : {"$gt" : [{"$toInt" :"$location"} , 59000]}},
//   {"$expr" : {"$lt" : [{"$toInt" :"$location"} , price1]}}
//   ]},
//   {$and :[{"$expr" : {"$gt" : [{"$toInt" :"$location"} , 58000]}},
//   {"$expr" : {"$lte" : [{"$toInt" :"$location"} , 59000]}}
//   ]}]
//   const query2= [{$or :[...ar]},
// {price : {$in : ["Amsterdam"]}}
// ]
//   const meetupsCollection2 = db2.collection('meetups');
//   const query = {$and:query2};
// console.log(query);
//   // const result2 = await meetupsCollection2.find({"$expr" : {"$gt" : [{"$toInt" :"$location"} , 59000]}}).toArray();
//   const result2 = await meetupsCollection2.find(query).toArray();
//   console.log(result2);
//   client2.close();
// }}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9383));
module.exports = __webpack_exports__;

})();