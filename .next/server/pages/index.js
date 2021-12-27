(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2430:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"detailsFlexColumn": "MeetupItem_detailsFlexColumn__9UXBM",
	"detailsFlex": "MeetupItem_detailsFlex__e9CMR",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b",
	"pDiv": "MeetupList_pDiv__4EEMm",
	"mainDiv": "MeetupList_mainDiv__6WW2S",
	"searchDiv": "MeetupList_searchDiv__wISHn",
	"searchItem": "MeetupList_searchItem__nQNNi",
	"indSpan": "MeetupList_indSpan__GoAIb",
	"h3Span": "MeetupList_h3Span__901LP",
	"h3Count": "MeetupList_h3Count__9_or5",
	"switch": "MeetupList_switch__gfv9z",
	"slider": "MeetupList_slider__lAODW",
	"round": "MeetupList_round__Iypkg"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 4117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9673);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(6672);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(4117);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(2430);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js





function MeetupItem(props) {
    const router = (0,router_.useRouter)();
    function showDetailsHandler() {
        router.push('/' + props.id);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).detailsFlex,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetupItem_module_default()).detailsFlexColumn,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-map-marker-alt",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        props.price
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-male",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        props.tenant
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetupItem_module_default()).detailsFlexColumn,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-building",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        props.apartment
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-tag",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        "$",
                                        props.location
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailsHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

;// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
    console.log(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (MeetupList_module_default()).list,
            children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                    id: meetup.id,
                    image: meetup.image,
                    title: meetup.title,
                    address: meetup.address,
                    price: meetup.price,
                    contact: meetup.contact,
                    apartment: meetup.apartment,
                    tenant: meetup.tenant,
                    location: meetup.location,
                    cooler: meetup.cooler,
                    microwave: meetup.microwave,
                    refrigerator: meetup.refrigerator,
                    heater: meetup.heater,
                    description: meetup.description
                }, meetup.id)
            )
        })
    }));
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

;// CONCATENATED MODULE: ./pages/index.js








let priceChanged = false;
let locationChanged = false;
let tenantChanged = false;
let apartmentChanged = false;
let refinedMeetups = [];
let priceQueryArray = [];
let totQuery;
let requiredTenants = [];
let requiredApartment = [];
let searchMode = false;
function HomePage(props) {
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
    const { 0: checkedState , 1: setCheckedState  } = (0,external_react_.useState)(new Array(locations.length).fill(true));
    const { 0: pcheckedState , 1: psetCheckedState  } = (0,external_react_.useState)(new Array(priceList.length).fill(true));
    const { 0: tcheckedState , 1: tsetCheckedState  } = (0,external_react_.useState)(new Array(tenants.length).fill(true));
    const { 0: acheckedState , 1: asetCheckedState  } = (0,external_react_.useState)(new Array(apartment.length).fill(true));
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)(false);
    const { 0: checking , 1: setChecking  } = (0,external_react_.useState)(false);
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
    // async function addMeetupHandler() {
    //   const url = '/api/' + props.meetups[0].price;
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify(totQuery),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }); 
    //   const responseData = await response.json();
    //  if (responseData.result){
    //   refinedMeetups = responseData.result;
    //   setChecking(false);
    //  }
    // }   
    //   addMeetupHandler();
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "React Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Browse a huge list of highly active React meetups!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://kit.fontawesome.com/fdba8ed509.js",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MeetupList_module_default()).mainDiv,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MeetupList_module_default()).searchDiv,
                        children: [
                            props.locationArray && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupList_module_default()).searchItem,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Location"
                                    }),
                                    props.locationArray.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (MeetupList_module_default()).indSpan,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: (MeetupList_module_default())["switch"],
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "checkbox",
                                                            name: "location",
                                                            value: item._id,
                                                            checked: checkedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (MeetupList_module_default()).slider
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Span,
                                                    children: item._id
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Count,
                                                    children: item.count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            props.priceArray && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupList_module_default()).searchItem,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Price"
                                    }),
                                    priceArray.map((item, index, arr)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (MeetupList_module_default()).indSpan,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: (MeetupList_module_default())["switch"],
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "checkbox",
                                                            name: "price",
                                                            value: item[0] == "Other" ? 80000 : item[0],
                                                            checked: pcheckedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (MeetupList_module_default()).slider
                                                        })
                                                    ]
                                                }),
                                                item.length > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (MeetupList_module_default()).h3Span,
                                                    children: [
                                                        "$",
                                                        item[0],
                                                        " - $",
                                                        item[1]
                                                    ]
                                                }),
                                                item.length < 2 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Span,
                                                    children: "Greater than $80000"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Count,
                                                    children: props.priceArray[index].count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            props.tenantArray && props.tenantArray[0]._id && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupList_module_default()).searchItem,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Tenant Allowed"
                                    }),
                                    props.tenantArray.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (MeetupList_module_default()).indSpan,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: (MeetupList_module_default())["switch"],
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "checkbox",
                                                            name: "tenant",
                                                            value: item._id,
                                                            checked: tcheckedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (MeetupList_module_default()).slider
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Span,
                                                    children: item._id
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Count,
                                                    children: item.count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            props.apartmentArray && props.apartmentArray[0]._id && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupList_module_default()).searchItem,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Apartment Type"
                                    }),
                                    props.apartmentArray.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (MeetupList_module_default()).indSpan,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: (MeetupList_module_default())["switch"],
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "checkbox",
                                                            name: "apartment",
                                                            value: item._id,
                                                            checked: acheckedState[index],
                                                            onChange: handleOnChange.bind(index)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (MeetupList_module_default()).slider
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Span,
                                                    children: item._id
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (MeetupList_module_default()).h3Count,
                                                    children: item.count
                                                })
                                            ]
                                        })
                                    )
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: submitHandler,
                                children: "Search"
                            })
                        ]
                    }),
                    !checking && refinedMeetups && refinedMeetups.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                        meetups: refinedMeetups
                    }),
                    !searchMode && /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                        meetups: props.meetups
                    }),
                    !checking && searchMode && refinedMeetups && refinedMeetups.length < 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (MeetupList_module_default()).pDiv,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "No Results Found"
                        })
                    }),
                    checking && searchMode && refinedMeetups.length < 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (MeetupList_module_default()).pDiv,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Searching..."
                        })
                    })
                ]
            })
        ]
    }));
}
async function getStaticProps() {
    // fetch data from an API
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
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
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(196));
module.exports = __webpack_exports__;

})();