(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt",
	"imgItem": "MeetupDetail_imgItem__JAY_u",
	"imgSpan": "MeetupDetail_imgSpan__nXpxa",
	"mainRow": "MeetupDetail_mainRow__7nVll",
	"detailsFlex": "MeetupDetail_detailsFlex__YWp3h"
};


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js



function MeetupDetail(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MeetupDetail_module_default()).detailsFlex,
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
                    }),
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
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-phone",
                                    style: {
                                        color: "#77002e"
                                    }
                                })
                            }),
                            "+31 ",
                            props.contact
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    backgroundColor: "#77002e",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "white"
                },
                children: "Amenities"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MeetupDetail_module_default()).mainRow,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    style: {
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-group col-md-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupDetail_module_default()).imgItem,
                                style: {
                                    opacity: `${props.cooler ? 1 : 0.5}`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://cdn-icons-png.flaticon.com/128/816/816655.png",
                                        style: {
                                            height: "5rem",
                                            marginBottom: "1rem"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (MeetupDetail_module_default()).imgSpan,
                                        children: "Air Cooler"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-group col-md-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupDetail_module_default()).imgItem,
                                style: {
                                    opacity: `${props.microwave ? 1 : 0.5}`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        style: {
                                            height: "5rem",
                                            marginBottom: "1rem"
                                        },
                                        src: "https://t4.ftcdn.net/jpg/02/98/58/67/240_F_298586773_RJyugngszfs8bkVtcB7uZ4h7ooMRscjA.jpg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (MeetupDetail_module_default()).imgSpan,
                                        children: "Microwave"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-group col-md-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupDetail_module_default()).imgItem,
                                style: {
                                    opacity: `${props.refrigerator ? 1 : 0.5}`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        style: {
                                            height: "5rem",
                                            marginBottom: "1rem"
                                        },
                                        src: "https://cdn-icons.flaticon.com/png/128/3441/premium/3441529.png?token=exp=1640653734~hmac=3202f1b204039889a14ea35743842cf3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (MeetupDetail_module_default()).imgSpan,
                                        children: "Refrigerator"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-group col-md-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MeetupDetail_module_default()).imgItem,
                                style: {
                                    opacity: `${props.heater ? 1 : 0.5}`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        style: {
                                            height: "5rem",
                                            marginBottom: "1rem"
                                        },
                                        src: "https://cdn-icons-png.flaticon.com/128/740/740973.png"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (MeetupDetail_module_default()).imgSpan,
                                        children: "Heater"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    backgroundColor: "#77002e",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "white"
                },
                children: "About the Property"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-group col-md-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.description
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

;// CONCATENATED MODULE: ./pages/[meetupId]/index.js






function MeetupDetails(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.meetupData.description
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
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                image: props.meetupData.image,
                title: props.meetupData.title,
                address: props.meetupData.address,
                description: props.meetupData.description,
                price: props.meetupData.price,
                location: props.meetupData.location,
                contact: props.meetupData.contact,
                tenant: props.meetupData.tenant,
                apartment: props.meetupData.apartment,
                cooler: props.meetupData.cooler,
                microwave: props.meetupData.microwave,
                refrigerator: props.meetupData.refrigerator,
                heater: props.meetupData.heater
            })
        ]
    }));
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({
    }, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            })
        )
    };
}
async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({
        _id: (0,external_mongodb_.ObjectId)(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                price: selectedMeetup.price,
                location: selectedMeetup.location,
                contact: selectedMeetup.contact,
                apartment: selectedMeetup.apartment,
                tenant: selectedMeetup.tenant,
                cooler: selectedMeetup.cooler,
                microwave: selectedMeetup.microwave,
                refrigerator: selectedMeetup.refrigerator,
                heater: selectedMeetup.heater
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


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
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();