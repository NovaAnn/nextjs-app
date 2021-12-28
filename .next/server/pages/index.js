"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6672);
/* harmony import */ var _components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7944);








let priceChanged = false;
let locationChanged = false;
let tenantChanged = false;
let apartmentChanged = false;
let refinedMeetups = (/* unused pure expression or super */ null && ([]));
let priceQueryArray = [];
let totQuery;
let requiredTenants = [];
let requiredApartment = [];
let searchMode = false;
function HomePage(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const locations = props.locationArray.map((item)=>{
        return item._id;
    });
    const priceList = props.priceArray.map((item)=>{
        if (item._id == 'Other') {
            return 80000;
        } else {
            return item._id;
        }
    });
    const tenants = props.tenantArray.map((item)=>{
        return item._id;
    });
    const apartment = props.apartmentArray.map((item)=>{
        return item._id;
    });
    const { 0: checkedState , 1: setCheckedState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(locations.length).fill(true));
    const { 0: pcheckedState , 1: psetCheckedState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(priceList.length).fill(true));
    const { 0: tcheckedState , 1: tsetCheckedState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(tenants.length).fill(true));
    const { 0: acheckedState , 1: asetCheckedState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(apartment.length).fill(true));
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: checking , 1: setChecking  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const actualPriceList = [
        20000,
        40000,
        60000,
        80000
    ];
    const commonFunction = (array)=>{
        return array.map((price)=>{
            const higherLim = actualPriceList.find((actPrice)=>{
                return actPrice > price;
            });
            if (higherLim) {
                return [
                    price,
                    higherLim
                ];
            } else {
                return [
                    price
                ];
            }
        });
    };
    const priceArray = commonFunction(priceList);
    const submitHandler = ()=>{
        refinedMeetups = [];
        searchMode = true;
        setChecking(true);
        const requiredLocations = locations.filter((_, index)=>{
            return checkedState[index];
        });
        const requiredPrices = priceList.filter((_, index)=>{
            return pcheckedState[index];
        });
        if (tenants.length > 0) {
            requiredTenants = tenants.filter((_, index)=>{
                return tcheckedState[index];
            });
        }
        if (apartment.length > 0) {
            requiredApartment = apartment.filter((_, index)=>{
                return acheckedState[index];
            });
        }
        const locationQuery = {
            price: {
                $in: [
                    ...requiredLocations
                ]
            }
        };
        const tenantQuery = {
            tenant: {
                $in: [
                    ...requiredTenants
                ]
            }
        };
        const apartmentQuery = {
            apartment: {
                $in: [
                    ...requiredApartment
                ]
            }
        };
        const searchArray = commonFunction(requiredPrices);
        searchArray.forEach((element, i)=>{
            if (element.length > 1) {
                priceQueryArray[i] = {
                    $and: [
                        {
                            "$expr": {
                                "$gte": [
                                    {
                                        "$toInt": "$location"
                                    },
                                    element[0]
                                ]
                            }
                        },
                        {
                            "$expr": {
                                "$lte": [
                                    {
                                        "$toInt": "$location"
                                    },
                                    element[1]
                                ]
                            }
                        }
                    ]
                };
            } else {
                priceQueryArray[i] = {
                    "$expr": {
                        "$gte": [
                            {
                                "$toInt": "$location"
                            },
                            80000
                        ]
                    }
                };
            }
        });
        const priceQuery = {
            $or: [
                ...priceQueryArray
            ]
        };
        totQuery = {
            $and: [
                priceQuery,
                locationQuery,
                tenantQuery,
                apartmentQuery
            ]
        };
        async function addMeetupHandler() {
            console.log('1');
            console.log(totQuery);
            // const response = await fetch(url, {
            //   method: 'POST',
            //   body: JSON.stringify(totQuery),
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            // }); 
            // const responseData = await response.json();
            //  if (responseData.result){
            //   refinedMeetups = responseData.result;
            //   setChecking(false);
            router.push({
                pathname: '/new-search',
                query: {
                    priceArr: requiredPrices,
                    locArr: requiredLocations,
                    tenantArr: requiredTenants,
                    aptArr: requiredApartment
                }
            });
        }
        addMeetupHandler();
    };
    const handleOnChange = (event)=>{
        switch(event.target.name){
            case 'location':
                {
                    locationChanged = true;
                    const locIndex = locations.findIndex((location)=>{
                        return location == event.target.value;
                    });
                    const updatedCheckedState = checkedState.map((item, index)=>index === locIndex ? !item : item
                    );
                    setCheckedState(updatedCheckedState);
                }
            case 'tenant':
                {
                    tenantChanged = true;
                    const tenIndex = tenants.findIndex((location)=>{
                        return location == event.target.value;
                    });
                    const tupdatedCheckedState = tcheckedState.map((item, index)=>index === tenIndex ? !item : item
                    );
                    tsetCheckedState(tupdatedCheckedState);
                }
            case 'apartment':
                {
                    apartmentChanged = true;
                    const aptIndex = apartment.findIndex((location)=>{
                        return location == event.target.value;
                    });
                    const aupdatedCheckedState = acheckedState.map((item, index)=>index === aptIndex ? !item : item
                    );
                    asetCheckedState(aupdatedCheckedState);
                }
            case 'price':
                {
                    priceChanged = true;
                    const priceIndex = priceList.findIndex((location)=>{
                        return location == event.target.value;
                    });
                    const pupdatedCheckedState = pcheckedState.map((item, index)=>index === priceIndex ? !item : item
                    );
                    psetCheckedState(pupdatedCheckedState);
                }
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "React Meetups"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Browse a huge list of highly active React meetups!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://kit.fontawesome.com/fdba8ed509.js",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainDiv),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchDiv),
                        children: [
                            props.locationArray && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchItem),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Location"
                                    }),
                                    props.locationArray.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().indSpan),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default()["switch"]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "checkbox",
                                                            name: "location",
                                                            value: item._id,
                                                            checked: checkedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Span),
                                                    children: item._id
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Count),
                                                    children: item.count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            props.priceArray && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchItem),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Price"
                                    }),
                                    priceArray.map((item, index, arr)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().indSpan),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default()["switch"]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "checkbox",
                                                            name: "price",
                                                            value: item[0] == "Other" ? 80000 : item[0],
                                                            checked: pcheckedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider)
                                                        })
                                                    ]
                                                }),
                                                item.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Span),
                                                    children: [
                                                        "$",
                                                        item[0],
                                                        " - $",
                                                        item[1]
                                                    ]
                                                }),
                                                item.length < 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Span),
                                                    children: "Greater than $80000"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Count),
                                                    children: props.priceArray[index].count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            props.tenantArray && props.tenantArray[0]._id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchItem),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Tenant Allowed"
                                    }),
                                    props.tenantArray.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().indSpan),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default()["switch"]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "checkbox",
                                                            name: "tenant",
                                                            value: item._id,
                                                            checked: tcheckedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Span),
                                                    children: item._id
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Count),
                                                    children: item.count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            props.apartmentArray && props.apartmentArray[0]._id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchItem),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Apartment Type"
                                    }),
                                    props.apartmentArray.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().indSpan),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default()["switch"]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "checkbox",
                                                            name: "apartment",
                                                            value: item._id,
                                                            checked: acheckedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Span),
                                                    children: item._id
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_meetups_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3Count),
                                                    children: item.count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: submitHandler,
                                children: "Search"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        meetups: props.meetups
                    })
                ]
            })
        ]
    }));
}
async function getStaticProps() {
    // fetch data from an API
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    const result2 = await meetupsCollection.aggregate([
        {
            $project: {
                title: 1,
                image: 1,
                item: 1,
                address: 1,
                price: 1,
                location: 1,
                tenant: 1,
                apartment: 1,
                description: 1,
                priceInt: {
                    $toInt: "$location"
                }
            }
        },
        {
            $facet: {
                "categorizedByLocation": [
                    {
                        $sortByCount: "$price"
                    }
                ],
                "categorizedByTenant": [
                    {
                        $sortByCount: "$tenant"
                    }
                ],
                "categorizedByApartment": [
                    {
                        $sortByCount: "$apartment"
                    }
                ],
                "categorizedByPrice": [
                    {
                        $match: {
                            price: {
                                $exists: 1
                            }
                        }
                    },
                    {
                        $bucket: {
                            groupBy: "$priceInt",
                            boundaries: [
                                0,
                                20000,
                                40000,
                                60000,
                                80000
                            ],
                            default: "Other",
                            output: {
                                "count": {
                                    $sum: 1
                                },
                                "titles": {
                                    $push: "$title"
                                }
                            }
                        }
                    }
                ]
            }
        }
    ]);
    const yourData = await result2.next();
    client.close();
    return {
        props: {
            meetups: meetups.map((meetup)=>({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    price: meetup.price,
                    contact: meetup.contact,
                    apartment: meetup.apartment,
                    tenant: meetup.tenant,
                    location: meetup.location,
                    cooler: meetup.cooler,
                    microwave: meetup.microwave,
                    refrigerator: meetup.refrigerator,
                    heater: meetup.heater,
                    description: meetup.description,
                    id: meetup._id.toString()
                })
            ),
            priceArray: yourData.categorizedByPrice,
            locationArray: yourData.categorizedByLocation,
            tenantArray: yourData.categorizedByTenant,
            apartmentArray: yourData.categorizedByApartment
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [944], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();